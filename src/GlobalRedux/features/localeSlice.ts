import { createSlice } from "@reduxjs/toolkit";

const initialState: "en" | "fa" | "ar" = "" as "en";

const localeSlice = createSlice({
  name: "locale",
  initialState,
  reducers: {
    set_locale: function (state, action) {
      return (state = action.payload);
    },
  },
});

export const { set_locale } = localeSlice.actions;

export default localeSlice.reducer;
