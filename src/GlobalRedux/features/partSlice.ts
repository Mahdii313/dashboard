import { createSlice } from "@reduxjs/toolkit";

const initialState = "Dashboard";

const partSlice = createSlice({
  name: "part",
  initialState,
  reducers: {
    set_part: function (state, action) {
      return (state = action.payload);
    },
  },
});

export const { set_part } = partSlice.actions;
export default partSlice.reducer;
