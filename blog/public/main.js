const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "../src/content");
let postlist = [];

const getPosts = () => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log("디렉토리의 내용을 나열하지 못했습니다:" + err);
    }
    files.forEach((file, i) => {
      let obj = {};
      let post;
      fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
        const getMetadataIndices = (acc, elem, i) => {
          if (/^---/.test(elem)) {
            acc.push(i);
          }
          return acc;
        };
        const parseMetadata = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            let metadata = lines.slice(
              metadataIndices[0] + 1,
              metadataIndices[1]
            );
            metadata.forEach((line) => {
              obj[line.split(": ")[0]] = line.split(": ")[1];
            });
            return obj;
          }
        };
        const parseContent = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            lines = lines.slice(metadataIndices[1] + 1, lines.length);
          }
          return lines.join("\n");
        };
        const lines = contents.split("\n");
        const metadataIndices = lines.reduce(getMetadataIndices, []);
        const metadata = parseMetadata({ lines, metadataIndices });
        const content = parseContent({ lines, metadataIndices });
        post = {
          id: i + 1,
          title: metadata.title ? metadata.title : "Have No Title",
          ahthor: metadata.ahthor ? metadata.ahthor : "Have No Author",
          date: metadata.date ? metadata.date : "Have No Date",
          content: content ? content : "Have No Content",
        };
        postlist.push(post);
        if (i === files.length - 1) {
          let data = JSON.stringify(postlist);
          fs.writeFileSync("src/posts.json", data);
        }
      });
    });
  });
};

getPosts();
