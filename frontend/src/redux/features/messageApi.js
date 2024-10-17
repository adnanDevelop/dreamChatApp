import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const messageApi = createApi({
  reducerPath: "messageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3000/api/message`,
    credentials: "include",
  }),
  tagTypes: ["userMessages"],
  endpoints: (builder) => ({
    // Send Message
    sentMessage: builder.mutation({
      query: (payload) => ({
        url: `/send/${payload.id}`,
        method: "POST",
        body: payload.body,
      }),
      invalidatesTags: ["userMessages"],
    }),

    // List Messages
    listMessage: builder.query({
      query: (payload) => ({
        url: `/get-messages/${payload.id}`,
        method: "GET",
      }),
      providesTags: ["userMessages"],
    }),
  }),
});

export const { useListMessageQuery, useSentMessageMutation } = messageApi;

export default messageApi;
