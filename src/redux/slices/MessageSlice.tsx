import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  message: 'Mensaje inicial',
};

const MessageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
  },
});

export const {setMessage} = MessageSlice.actions;
export default MessageSlice.reducer;
