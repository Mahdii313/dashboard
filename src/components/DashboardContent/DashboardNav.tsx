import LanguageMenu from "./DashboardNav/LanguageMenu";
import SearchBar from "./DashboardNav/SearchBar";
import AccountSettings from "./DashboardNav/AccountSettings";
import { useTranslations } from "next-intl";
import React from "react";

function DashboardNav() {
  const t = useTranslations("Index");

  return (
    <nav className="bg-slate-50 px-2 lg:px-4 xl:px-6 py-3 lg:py-4 items-center justify-between text-slate-800 flex ml-auto sm:w-3/4 md:w-3/4 lg:w-4/5 xl:w-3/4 2xl:w-5/6">
      <h1 className="hidden 2xl:block xl:text-[22px] 2xl:text-3xl font-bold">
        {t("title")}
      </h1>
      <div className="flex flex-col gap-3 sm:gap-0 sm:flex-row justify-between items-center w-full lg:w-full xl:w-11/12 2xl:w-3/4">
        <SearchBar />
        <div className="flex items-center justify-evenly sm:justify-between w-full sm:w-1/2 xl:w-7/12">
          <div className="block sm:hidden lg:block">
            <LanguageMenu />
          </div>

          <AccountSettings />
        </div>
      </div>
    </nav>
  );
}

export default React.memo(DashboardNav);
