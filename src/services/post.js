import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),
    getPostById: builder.query({
      query: (id) => ({
        url: `posts/${id}`,
        method: "GET",
      }),
    }),
    getPostByLimit: builder.query({
      query: (limit) => ({
        url: `posts?_limit=${limit}`,
      }),
    }),
    deletePost: builder.mutation({
      query: (id) => {
        console.log(id);
        return {
          url: `posts/${id}`,
          method: "DELETE",
        };
      },
    }),
    createPost: builder.mutation({
      query: (newPost) => {
        console.log(newPost);
        return {
          url: `posts`,
          method: "POST",
          body: newPost,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        };
      },
    }),
    updatePost: builder.mutation({
        query: (updatedPost) => {
            console.log(updatedPost)
            return {
                url: `posts/1`,
                method: 'PUT',
                body: updatedPost,
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                }
            }
        }
    })
  }),
});

export const {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
  useDeletePostMutation,
  useCreatePostMutation,
  useUpdatePostMutation
} = postApi;
