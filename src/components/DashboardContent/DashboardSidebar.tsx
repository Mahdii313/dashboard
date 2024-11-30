"use client";

import React from "react";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { useTranslations } from "next-intl";
import { sidebar } from "@/data";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { set_part } from "@/GlobalRedux/features/partSlice";
import LanguageMenu from "./DashboardNav/LanguageMenu";

const DashboardSidebar = () => {
  const t = useTranslations("Logo");
  const part = useSelector((state: any) => state.part);
  const [openSidebar, setOpenSidebar] = React.useState(true);
  const router = useRouter();
  const dispatch = useDispatch();

  function setPartColor(item: any) {
    if (part === "Sign Out") {
      if (part === item.title) {
        return "text-red-500";
      } else return "text-slate-500";
    } else if (part === item.title) {
      return "bg-indigo-600 text-slate-50";
    } else return "text-slate-500";
  }
  return (
    <>
      <aside className="bg-slate-50 sm:p-3 md:p-5 lg:p-7 xl:p-12 h-full sm:w-1/4 md:w-1/4 lg:w-1/5 xl:w-1/4 2xl:w-1/6 absolute top-0 left-0 z-0 hidden sm:block">
        <div className="flex gap-4 items-center mb-8 lg:mb-12">
          <TbLayoutDashboardFilled className="sm:text-3xl md:text-4xl lg:text-5xl text-white sm:p-1 md:p-2 bg-indigo-600 rounded-lg" />
          <div className="sm:text-base md:text-lg lg:text-xl xl:text-[22px] 2xl:text-3xl text-slate-800 font-bold">
            {t("title")}
          </div>
        </div>
        <ul className="w-full select-none">
          {sidebar.map((item) => {
            return (
              <li
                key={item.title}
                className={`sm:text-[10px] lg:text-[12px] xl:text-[13px] flex justify-start px-4 py-3 rounded-xl ${
                  item.title === "Sign Out"
                    ? "hover:text-red-500"
                    : "hover:text-slate-50 hover:bg-indigo-600"
                } duration-100  cursor-pointer items-center gap-5 mb-1 xl:mb-3 ${setPartColor(
                  item
                )}`}
                onClick={() => {
                  if (item.title === "Sign Out") {
                    router.push("/");
                  }
                  dispatch(set_part(item.title));
                }}
              >
                <div>{item.icon}</div>
                <h2>{useTranslations(item.title)("title")}</h2>
              </li>
            );
          })}
          <li className="hidden lg:hidden sm:block">
            <LanguageMenu />
          </li>
        </ul>
      </aside>
      <aside
        className={`bg-slate-50 sm:p-3 md:p-5 lg:p-7 xl:p-12 h-full sm:w-1/4 md:w-1/4 lg:w-1/5 xl:w-1/4 2xl:w-1/6 absolute top-0 left-0 z-0 ${
          openSidebar ? "block" : "hidden"
        }  sm:hidden`}
      >
        <div className="flex gap-4 items-center mb-8 lg:mb-12">
          <TbLayoutDashboardFilled className="sm:text-3xl md:text-4xl lg:text-5xl text-white sm:p-1 md:p-2 bg-indigo-600 rounded-lg" />
          <div className="sm:text-base md:text-lg lg:text-xl xl:text-[22px] 2xl:text-3xl text-slate-800 font-bold">
            {t("title")}
          </div>
        </div>
        <ul className="w-full select-none">
          {sidebar.map((item) => {
            return (
              <li
                key={item.title}
                className={`sm:text-[10px] lg:text-[12px] xl:text-[13px] flex justify-start px-4 py-3 rounded-xl ${
                  item.title === "Sign Out"
                    ? "hover:text-red-500"
                    : "hover:text-slate-50 hover:bg-indigo-600"
                } duration-100  cursor-pointer items-center gap-5 mb-1 xl:mb-3 ${setPartColor(
                  item
                )}`}
                onClick={() => {
                  if (item.title === "Sign Out") {
                    router.push("/");
                  }
                  dispatch(set_part(item.title));
                }}
              >
                <div>{item.icon}</div>
                <h2>{useTranslations(item.title)("title")}</h2>
              </li>
            );
          })}
          <li className="hidden lg:hidden sm:block">
            <LanguageMenu />
          </li>
        </ul>
      </aside>
    </>
  );
};

export default React.memo(DashboardSidebar);
