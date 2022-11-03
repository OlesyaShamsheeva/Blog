import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi=createApi({
  reducerPath: "api/auth",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: build => ({
    getUser: build.query({
      query: () => `api/auth/authorization`
    }),
    createUser: build.mutation(({
      query:(values)=>({
        url: `api/auth/registration`,
        method:"POST",
        body:values
      })
    })),
  })
})
export const {useGetUserQuery,useCreateUserMutation}=authApi