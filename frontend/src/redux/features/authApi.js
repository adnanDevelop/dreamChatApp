import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../baseUrl";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/auth`,
    credentials: "include",
  }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    // Register User
    registerUser: builder.mutation({
      query: (payload) => ({
        url: "/register",
        method: "POST",
        body: payload.body,
      }),
    }),

    // Login User
    loginUser: builder.mutation({
      query: (payload) => ({
        url: "/login",
        method: "POST",
        body: payload.body,
      }),
    }),
    // Login User
    updateUser: builder.mutation({
      query: (payload) => ({
        url: `/update-user/${payload.id}`,
        method: "PUT",
        body: payload.body,
      }),
    }),

    // Logout User
    logoutUser: builder.mutation({
      query: (payload) => ({
        url: `/logout/${payload.id}`,
        method: "DELETE",
      }),
    }),

    // Delete User
    deleteUser: builder.mutation({
      query: (payload) => ({
        url: `/delete-user/${payload.id}`,
        method: "DELETE",
      }),
    }),

    // Get all users
    getUser: builder.query({
      query: () => ({
        url: `/user`,
        method: "Get",
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useLogoutUserMutation,
  useLoginUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useRegisterUserMutation,
} = authApi;

export default authApi;
