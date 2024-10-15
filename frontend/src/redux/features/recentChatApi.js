import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const recentChatApi = createApi({
  reducerPath: "recentChatApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3000/api/contact`,
    credentials: "include",
  }),
  tagTypes: ["recentChat"],
  endpoints: (builder) => ({
    // Add Favourite
    addFavourite: builder.mutation({
      query: (payload) => ({
        url: `/add-favourite/${payload.id}`,
        method: "POST",
      }),
      invalidatesTags: ["recentChat"],
    }),

    // Delete Single favourite
    deleteFavourite: builder.mutation({
      query: (payload) => ({
        url: `/remove-favourite/${payload.id}`,
        method: "PUT",
      }),
      invalidatesTags: ["recentChat"],
    }),

    // Delete All Favourites
    deleteAllFavourite: builder.mutation({
      query: () => ({
        url: `/delete`,
        method: "DELETE",
      }),
      invalidatesTags: ["recentChat"],
    }),

    // Get Favourites
    getFavourite: builder.query({
      query: (payload) => ({
        url: `/get-favourite/${payload.id}`,
        method: "GET",
      }),
      providesTags: ["recentChat"],
    }),
  }),
});

export const {
  useGetFavouriteQuery,
  useAddFavouriteMutation,
  useDeleteFavouriteMutation,
  useDeleteAllFavouriteMutation,
} = recentChatApi;

export default recentChatApi;
