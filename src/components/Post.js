import React from "react";
import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../services/post";

function Post() {
  const { id } = useParams();
  const responseInfo = useGetPostByIdQuery(id);

  if (responseInfo.isLoading) {
    return (
      <div>
        <h1> Loading...</h1>
      </div>
    );
  }

  return (
    <div className="post">
      <h3> {responseInfo.data.title} </h3>
      <p> {responseInfo.data.body} </p>
    </div>
  );
}

export default Post;
