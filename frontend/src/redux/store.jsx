import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// Slices
import tabSlice from "./slices/tabSlice";
import authSlice from "./slices/authSlice";
import socketSlice from "./slices/socketSlice";
import messageSlice from "./slices/messageSlice";
import conversationSlice from "./slices/conversationSlice";

// Apis
import authApi from "./features/authApi";
import inviteApi from "./features/inviteApi";
import messageApi from "./features/messageApi";
import recentChatApi from "./features/recentChatApi";
import conversationApi from "./features/conversationApi";
import favouriteContactApi from "./features/favouriteContactApi";

const store = configureStore({
  reducer: {
    tab: tabSlice,
    auth: authSlice,
    socket: socketSlice,
    message: messageSlice,
    conversation: conversationSlice,
    // Apis
    [authApi.reducerPath]: authApi.reducer,
    [inviteApi.reducerPath]: inviteApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
    [recentChatApi.reducerPath]: recentChatApi.reducer,
    [conversationApi.reducerPath]: conversationApi.reducer,
    [favouriteContactApi.reducerPath]: favouriteContactApi.reducer,
  },

  // Middlewares
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      inviteApi.middleware,
      messageApi.middleware,
      recentChatApi.middleware,
      conversationApi.middleware,
      favouriteContactApi.middleware
    ),
});

setupListeners(store.dispatch);
export default store;
