import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@/features/user/userSlice';
import apiSlice from './api/apiSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer,
  },
  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware().concat(apiSlice.middleware),
  devTools: false,
});

export default store;
