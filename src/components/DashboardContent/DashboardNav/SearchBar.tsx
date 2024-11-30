"use client";

import { IoSearch } from "react-icons/io5";
import { memo } from "react";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const locale = useSelector((state: any) => state.locale);
  return (
    <div
      className={`bg-slate-100 p-3 rounded-xl flex ${
        locale !== "en" && "flex-row-reverse"
      } gap-2 w-full sm:w-[320px] md:w-full lg:w-[380px] xl:w-[340px] 2xl:w-[450px] sm:mr-2 lg:mr-5`}
    >
      <IoSearch className="text-indigo-500 text-2xl sm:text-xl lg:text-2xl" />
      <input
        dir={locale !== "en" ? "rtl" : "ltr"}
        type="text"
        placeholder={
          locale === "en"
            ? "Search here..."
            : locale === "fa"
            ? "اینجا جست و جو کنید..."
            : "ابحث هنا..."
        }
        className="bg-transparent w-full text-base sm:text-[12px] md:text-sm lg:text-base focus:outline-none"
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            const element = e.target as HTMLInputElement;
            element.value = "";
            alert("This search system is not deployed.");
          }
        }}
      />
    </div>
  );
};

export default memo(SearchBar);
