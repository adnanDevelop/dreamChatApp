import authSlice from "./slices/authSlice";
import tabSlice from "./slices/tabSlice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// Apis
import authApi from "./features/authApi";

const store = configureStore({
  reducer: {
    auth: authSlice,
    tab: tabSlice,
    // Apis
    [authApi.reducerPath]: authApi.reducer,
  },

  // Middlewares
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

setupListeners(store.dispatch);
export default store;
