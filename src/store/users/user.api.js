import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi=createApi({
  reducerPath: "api/user",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: build => ({
    getUsers: build.query({
      query: (limit = 5) => `api/user/`
    }),
    createUser: build.mutation(({
      query:(user)=>({
        url: `api/user/registration`,
        method:"POST",
        body: user
      })
    })),
  })
})
export const {useGetUsersQuery,useCreateUserMutation}=userApi
