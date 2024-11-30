import { createSlice } from "@reduxjs/toolkit";

type Notif = {
  subject: string;
  body: string;
  timeAgo: string;
  tag: string;
};

const initialState: Notif[] = [];

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    set_notifications: function (state, action) {
      return (state = action.payload);
    },
  },
});

export const { set_notifications } = notificationsSlice.actions;
export default notificationsSlice.reducer;
