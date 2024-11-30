import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  hashedEmail: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    log_in: function (state, action) {
      return (state = action.payload);
    },

    log_out: function (state) {
      return (state = { email: "", password: "", hashedEmail: "" });
    },
  },
});

export const { log_in, log_out } = userSlice.actions;

export default userSlice.reducer;
