import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "animate.css";
import { useRouter } from "next/navigation";
import { IoLogOutOutline } from "react-icons/io5";
import { useTranslations } from "next-intl";
import { set_part } from "@/GlobalRedux/features/partSlice";

const AccountOptions = () => {
  const user = useSelector((state: any) => state.user);
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const locale = useSelector((state: any) => state.locale);
  const t1 = useTranslations("Post");
  const t2 = useTranslations("Settings");
  const t3 = useTranslations("Logout");

  let username = user.email.split("@")[0];

  return (
    <div>
      <div
        className="relative h-full min-w-[100px] sm:min-w-[120px] md:min-w-[136px] lg:min-w-36 xl:min-w-40 cursor-pointer bg-slate-100 px-1 sm:px-2 md:px-4 py-1 select-none"
        onClick={(e) => {
          if ((e.target as HTMLElement).localName !== "ul") setOpen(!open);
        }}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-slate-800 font-bold text-[12px] md:text-sm">
            {username.substring(0, 12)}
            {username.length > 12 && "..."}
          </h2>
          {open ? (
            <FaAngleUp size={18} className="text-slate-800" />
          ) : (
            <FaAngleDown size={18} className="text-slate-800" />
          )}
        </div>
        <h2 className="text-slate-400 font-semibold text-[12px] md:text-sm">
          {t1("title")}
        </h2>
        {open && (
          <ul
            className={`${
              locale !== "en" && "text-right"
            } border shadow-2xl cursor-default animate__animated animate__faster animate__fadeInDown bg-slate-50 w-full absolute z-20 top-full p-1 right-0 mt-3 lg:mt-4`}
          >
            <li
              className="hover:bg-slate-100 text-[12px] md:text-sm lg:text-base duration-300 mb-1 cursor-pointer px-3 py-2 text-slate-800 hover:text-slate-950 font-semibold"
              onClick={() => {
                dispatch(set_part("Settings"));
              }}
            >
              {t2("title")}
            </li>
            <li
              className={`flex items-center justify-between hover:bg-slate-100 text-[12px] md:text-sm lg:text-base duration-300 mb-1 cursor-pointer px-3 py-2 text-red-500 hover:text-red-600 font-semibold ${
                locale !== "en" && "flex-row-reverse"
              }`}
              onClick={() => {
                router.push(`/${locale}`);
              }}
            >
              <div>{t3("title")}</div>
              <IoLogOutOutline className="sm:text-lg md:text-xl lg:text-2xl" />
            </li>
          </ul>
        )}
      </div>

      {open && (
        <div
          className="absolute top-0 left-0 h-screen w-screen bg-transparent z-10"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default React.memo(AccountOptions);
