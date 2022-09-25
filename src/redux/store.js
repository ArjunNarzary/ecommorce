import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/userSlice";

//APIS
import { serviceApi } from "./services/serviceApi";

const store = configureStore({
  reducer: {
    [serviceApi.reducerPath]: serviceApi.reducer,
    CART: cartReducer,
    USER: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serviceApi.middleware),
});

setupListeners(store.dispatch);

export default store;
