import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { removeFavourite } from "../../../../backend/controller/favouriteContactController";

const favouriteContactApi = createApi({
  reducerPath: "favouriteContactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3000/api/message`,
    credentials: "include",
  }),
  tagTypes: ["favouriteContact"],
  endpoints: (builder) => ({
    // Send Message
    addFavroute: builder.mutation({
      query: (payload) => ({
        url: `/add-favourite/${payload.id}`,
        method: "POST",
        body: payload.body,
      }),
      invalidatesTags: ["favouriteContact"],
    }),

    // Get Messages
    removeFavourite: builder.mutation({
      query: (payload) => ({
        url: `/remove-favourite/${payload.id}`,
        method: "PUT",
      }),
      invalidatesTags: ["favouriteContact"],
    }),

    // Delete Messages
    deleteAllFavourite: builder.mutation({
      query: (payload) => ({
        url: `/delete`,
        method: "DELETE",
        body: payload.body,
      }),
      invalidatesTags: ["favouriteContact"],
    }),

    // Delete Messages
    listFavourites: builder.query({
      query: (payload) => ({
        url: `/get/${payload.id}`,
        method: "GET",
      }),
      providesTags: ["favouriteContact"],
    }),
  }),
});

export const {
  useListFavouritesQuery,
  useAddFavrouteMutation,
  useRemoveFavouriteMutation,
  useDeleteAllFavouriteMutation,
} = favouriteContactApi;

export default favouriteContactApi;
