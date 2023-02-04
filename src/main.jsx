import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/createpost" element={<CreatePost />} />
      <Route path="/posts/:id" element={<Post />} />
    </Routes>
  </Router>
);
