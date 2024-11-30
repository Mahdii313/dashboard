import React from "react";
import { FaRegBell } from "react-icons/fa";
import { useTranslations } from "next-intl";
import fetchNotifications from "@/lib/fetch-notifications";
import { useFormState } from "react-dom";
import "animate.css";
import BellNotification from "./BellNotification";
import { useSelector, useDispatch } from "react-redux";
import { set_notifications } from "@/GlobalRedux/features/notificationsSlice";

type Notification = {
  title: string;
  body: string;
};

const Bell = () => {
  const [notificationsActionState, notificationsAction] = useFormState(
    fetchNotifications,
    []
  );
  const [open, setOpen] = React.useState(false);
  const t = useTranslations("EmptyNotif");
  const notifications = useSelector((state: any) => state.notifications);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (notifications.length === 0) {
      notificationsAction();
    }
  }, []);

  React.useEffect(() => {
    if (notificationsActionState.length !== 0)
      dispatch(set_notifications(notificationsActionState));
  }, [notificationsActionState]);

  return (
    <div>
      <div
        className="cursor-pointer relative size-full bg-yellow-500 bg-opacity-5 rounded-md p-3 hover:bg-opacity-15 duration-300"
        onClick={() => setOpen(true)}
      >
        {notifications.length > 0 && (
          <div className="bg-red-500 size-2 absolute right-2 top-2 rounded-full"></div>
        )}
        <FaRegBell className="text-2xl text-yellow-500" />
        {open ? (
          notifications.length === 0 ? (
            <div className="bg-slate-50 animate__animated animate__faster animate__fadeInDown border absolute p-5 top-full mt-4 right-0 min-w-96 z-20">
              <h2 className="text-center text-slate-800 text-xl">
                {t("title")}
              </h2>
            </div>
          ) : (
            <ul className="shadow-2xl cursor-default overflow-hidden animate__animated animate__faster animate__fadeInDown border absolute top-full mt-3 lg:mt-4 min-w-72 sm:min-w-60 md:min-w-80 lg:min-w-96 -right-[156px] sm:right-0 z-20 bg-slate-50">
              {notifications.map((notif: any, index: number) => {
                return (
                  <BellNotification key={index} notif={notif} index={index} />
                );
              })}
            </ul>
          )
        ) : null}
      </div>
      {open && (
        <div
          className="absolute top-0 left-0 w-screen h-screen bg-transparent z-10"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default React.memo(Bell);
