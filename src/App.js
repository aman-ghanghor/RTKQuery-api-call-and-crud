import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AllPosts from "./components/AllPosts";
import Post from "./components/Post";
// import LimitedPost from "./components/LimitedPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/posts" element={<AllPosts />} />
        <Route path='/posts/:id' element={<Post />} />
        {/* <Route path='/posts' element={<LimitedPost />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
