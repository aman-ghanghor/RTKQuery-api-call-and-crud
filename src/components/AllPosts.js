import React, { useEffect } from "react";
import { useGetAllPostQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } from "../services/post";

function AllPosts() {
  // const responseInfo = useGetAllPostQuery();
  // const [deletePost, responseInfo] = useDeletePostMutation()
  // const [createPost, responseInfo] = useCreatePostMutation()
  const [updatePost, responseInfo] = useUpdatePostMutation()


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

  // ------ GET ALL POST
  // return (
  //   <div>
  //     <h1> All Posts </h1>
  //     {responseInfo.data.map((post, index) => {
  //       return (
  //         <div key={index} className="post">
  //           <h3> {post.title} </h3>
  //           <p> {post.body} </p>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );


  // ------ DELETE POST 
  // return (
  //   <div>
  //     <button onClick={()=> deletePost(5)}> delete post </button>
  //   </div>
  // )

  
  // ------ CREATE POST
  // const postData = {
  //   title: 'foo',
  //   body: 'bar',
  //   userId: 1,
  // }
  // return (
  //   <div>
  //     <button onClick={()=> createPost(postData)}> create post </button>
  //   </div>
  // )


  // ------ UPDATE POST
  const postData = {
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }
  return (
    <div>
      <button onClick={()=> updatePost(postData)}> update post </button>
    </div>
  )


}

export default AllPosts;
