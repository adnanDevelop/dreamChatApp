import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const conversationApi = createApi({
  reducerPath: "conversationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3000/api/message`,
    credentials: "include",
  }),
  tagTypes: ["conversation"],
  endpoints: (builder) => ({
    // Send Message
    sendMessage: builder.mutation({
      query: (payload) => ({
        url: `/send/${payload.id}`,
        method: "POST",
        body: payload.body,
      }),
      invalidatesTags: ["conversation"],
    }),

    // Get Messages
    getMessagesById: builder.query({
      query: (payload) => ({
        url: `/get-messages/${payload.id}`,
        method: "GET",
      }),
      invalidatesTags: ["conversation"],
    }),

    // Delete Messages
    deleteMessage: builder.mutation({
      query: (payload) => ({
        url: `/delete/${payload.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["conversation"],
    }),
  }),
});

export const {
  useGetMessagesByIdQuery,
  useSendMessageMutation,
  useDeleteMessageMutation,
} = conversationApi;

export default conversationApi;
