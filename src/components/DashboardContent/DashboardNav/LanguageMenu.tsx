"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { memo } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { languages } from "@/data";
import { set_locale } from "@/GlobalRedux/features/localeSlice";
import { useRouter } from "next/navigation";
import "animate.css";

function LanguageMenu() {
  const locale = useSelector((state: any) => state.locale);
  const user = useSelector((state: any) => state.user);
  const [language, setLanguage] = useState<string>(locale);
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const router = useRouter();

  function setLanguageFlag(l: string) {
    const flag =
      l === "en"
        ? "/Flags/us.svg"
        : l === "ar"
        ? "/Flags/sa.svg"
        : "/Flags/ir.svg";

    return flag;
  }

  return (
    <div>
      <div className="select-none w-20 sm:w-full lg:w-24 xl:w-32 relative h-auto bg-slate-100 p-1 cursor-pointer">
        <div
          className="flex flex-row-reverse justify-between items-center p-1"
          onClick={() => setOpen(!open)}
        >
          {!open ? (
            <FaAngleDown size={18} className="text-slate-500" />
          ) : (
            <FaAngleUp size={18} className="text-slate-500" />
          )}
          <h1 className="text-sm sm:text-lg lg:text-base font-semibold">
            {language[0].toUpperCase() + language.slice(1)}
          </h1>
          <img
            src={setLanguageFlag(language)}
            alt={language}
            className="rounded-full size-5 sm:size-7 lg:size-6"
          />
        </div>
        {open && (
          <ul className="shadow-2xl cursor-default animate__animated animate__fadeInDown animate__faster w-full p-1 bg-slate-50 flex flex-col gap-1 border absolute mt-4 sm:mt-2 lg:mt-5 top-full left-0 z-30">
            {languages.map((l) => {
              return (
                <li
                  className="relative duration-300 hover:bg-slate-100 p-1 flex flex-row-reverse cursor-pointer justify-end items-center"
                  key={l}
                  onClick={() => {
                    setLanguage(l);
                    setOpen(false);
                    dispatch(set_locale(l));
                    router.push(`/${l}/dashboard?account=${user.hashedEmail}`);
                  }}
                >
                  <h2 className="text-sm lg:text-base font-semibold w-full text-center">
                    {l[0].toUpperCase() + l.slice(1)}
                  </h2>
                  <img
                    src={setLanguageFlag(l)}
                    alt={l}
                    className="rounded-full size-5 lg:size-6"
                  />
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {open && (
        <div
          className="w-screen h-screen absolute top-0 left-0 bg-transparent z-20"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default memo(LanguageMenu);
