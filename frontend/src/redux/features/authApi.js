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

    // Update User Profile
    updateUser: builder.mutation({
      query: (payload) => ({
        url: `/update-user/${payload.id}`,
        method: "PUT",
        body: payload.body,
      }),
    }),

    // Logout User
    logoutUser: builder.mutation({
      query: () => ({
        url: `/logout`,
        method: "GET",
      }),
    }),

    // Delete User
    deleteUser: builder.mutation({
      query: (payload) => ({
        url: `/delete-user/${payload.id}`,
        method: "DELETE",
      }),
    }),

    // Update Password
    updatePassword: builder.mutation({
      query: (payload) => ({
        url: `/update-password`,
        method: "PUT",
        body: payload.body,
      }),
    }),

    // Get all users
    getUser: builder.query({
      query: () => ({
        url: `/user`,
        method: "Get",
      }),
    }),

    // Get user by Id
    getUserById: builder.query({
      query: (payload) => ({
        url: `/user/${payload.id}`,
        method: "Get",
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetUserByIdQuery,
  useLogoutUserMutation,
  useLoginUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useRegisterUserMutation,
  useUpdatePasswordMutation,
} = authApi;

export default authApi;
