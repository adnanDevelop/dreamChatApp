import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const favouriteContactApi = createApi({
  reducerPath: "favouriteContactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3000/api/contact`,
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

    // Remove Favourites
    removeFavourite: builder.mutation({
      query: (payload) => ({
        url: `/remove-favourite/${payload.id}`,
        method: "PUT",
        body: payload.body,
      }),
      invalidatesTags: ["favouriteContact"],
    }),

    // List Favourites
    listFavourites: builder.query({
      query: (payload) => ({
        url: `/get-favourite/${payload.id}`,
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
} = favouriteContactApi;

export default favouriteContactApi;
