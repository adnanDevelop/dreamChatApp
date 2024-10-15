import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const inviteApi = createApi({
  reducerPath: "inviteApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3000/api/invite`,
    credentials: "include",
  }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    // Invite User
    inviteUser: builder.mutation({
      query: (payload) => ({
        url: "/sent",
        method: "POST",
        body: payload.body,
      }),
    }),
  }),
});

export const { useInviteUserMutation } = inviteApi;

export default inviteApi;
