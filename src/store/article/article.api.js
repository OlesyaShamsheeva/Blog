

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articleApi=createApi({
  reducerPath: "api/article",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: build => ({
    getArticles: build.query({
      query: (limit = 5) => `api/article/allArticles?limit=${limit}`
    }),
    getArticle: build.query({
      query: (articleId) => `api/article/1/${articleId}`
    }),
    getUserArt: build.query({
      query: (userId) => `api/article/2/${userId}`
    }),
    createArticle: build.mutation(({
      query:(article)=>({
        url: `api/article/addArticle`,
        method:"POST",
        body: article
      })
    })),

  })
})
export const {useGetArticlesQuery,useGetArticleQuery,useGetUserArtQuery,useCreateArticleMutation}=articleApi