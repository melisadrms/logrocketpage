import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import CreatePost from "./pages/CreatePost";
import Deneme from "./pages/Deneme";
import Post from "./pages/Post";
import ShowBlog from "./pages/ShowBlog";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/createpost" element={<CreatePost />} />
      <Route path="/posts/:id" element={<Post />} />
      <Route path="/deneme" element={<Deneme />} />
    </Routes>
  </Router>
);
