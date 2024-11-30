import React from "react";
import Bell from "./Bell";
import AccountBar from "./AccountBar";

const AccountSettings = () => {
  return (
    <div className="flex gap-2 sm:gap-3 md:gap-6">
      <Bell />
      <AccountBar />
    </div>
  );
};

export default React.memo(AccountSettings);
