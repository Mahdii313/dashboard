import React from "react";

type Notif = {
  subject: string;
  body: string;
  timeAgo: string;
  tag: string;
};

const BellNotification = ({
  notif,
  index,
}: {
  notif: Notif;
  index: number;
}) => {
  return (
    <li
      className={`animate__animated animate__slideInLeft py-2 px-4 lg:py-4 border-b w-full select-none animate__delay-${index}s`}
    >
      <h3 className="text-slate-800 sm:text-[12px] md:text-sm lg:text-base font-bold mb-1">
        {notif.subject}
      </h3>
      <p className="sm:text-[10px] md:text-sm lg:text-base text-slate-500 mb-1 w-full pb-1 px-2">
        {notif.body}
      </p>
      <div className="flex items-center justify-start gap-1">
        <div className="px-2 lg:px-3 py-1 lg:py-2 rounded-full sm:text-[10px] md:text-[12px] lg:text-base text-slate-800 font-semibold bg-slate-200">
          {notif.tag}
        </div>
        <div className="sm:text-[10px] md:text-[12px] lg:text-base text-slate-400 p-1">
          {notif.timeAgo} ago
        </div>
      </div>
    </li>
  );
};

export default React.memo(BellNotification);
