import {configureStore} from '@reduxjs/toolkit';
import MessageReducer from '../slices/MessageSlice';

export const ConfigStorage = configureStore({
  reducer: {
    message: MessageReducer,
  },
});
