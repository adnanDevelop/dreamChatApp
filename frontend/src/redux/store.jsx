// Slices
import tabSlice from "./slices/tabSlice";
import authSlice from "./slices/authSlice";
import conversationSlice from "./slices/conversationSlice";

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// Apis
import authApi from "./features/authApi";
import inviteApi from "./features/inviteApi";
import recentChatApi from "./features/recentChatApi";
import conversationApi from "./features/conversationApi";

const store = configureStore({
  reducer: {
    auth: authSlice,
    tab: tabSlice,
    conversation: conversationSlice,
    // Apis
    [authApi.reducerPath]: authApi.reducer,
    [inviteApi.reducerPath]: inviteApi.reducer,
    [recentChatApi.reducerPath]: recentChatApi.reducer,
    [conversationApi.reducerPath]: conversationApi.reducer,
  },

  // Middlewares
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      inviteApi.middleware,
      recentChatApi.middleware,
      conversationApi.middleware
    ),
});

setupListeners(store.dispatch);
export default store;
