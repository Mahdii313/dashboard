import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./features/userSlice";
import LocaleReducer from "./features/localeSlice";
import NotificationsReducer from "./features/notificationsSlice";
import PartReducer from "./features/partSlice";

export const store = configureStore({
  reducer: {
    user: UserReducer,
    locale: LocaleReducer,
    notifications: NotificationsReducer,
    part: PartReducer,
  },
});
