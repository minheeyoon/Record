import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Project from "./pages/project";
import Post from "./pages/post";
import PageNotFound from "./pages/notfound";
import ThemeContextProvider from "./components/hooks/useTheme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/404" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </ThemeContextProvider>
);
