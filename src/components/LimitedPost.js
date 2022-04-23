import React, { useEffect } from "react";
import {useSearchParams} from "react-router-dom"
import { useGetPostByLimitQuery } from "../services/post";

function LimitedPost() {
  const responseInfo = useGetPostByLimitQuery(5);

  useEffect(() => {
    console.log(responseInfo);
  });

  if (responseInfo.isLoading) {
    return (
      <div>
        <h1> Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1> Limited Post </h1>
      {responseInfo.data.map((post, index) => {
        return (
          <div key={index} className="post">
            <h3> {post.title} </h3>
            <p> {post.body} </p>
          </div>
        );
      })}
    </div>
  );
}

export default LimitedPost;
