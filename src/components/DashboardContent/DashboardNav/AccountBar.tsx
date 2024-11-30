import React from "react";
import AccountOptions from "./AccountOptions";

const AccountBar = () => {
  return (
    <div className="flex gap-4 items-center">
      <div className="size-9 lg:size-12 overflow-hidden rounded-xl">
        <img
          src="/male.jpeg"
          alt="user-icon"
          className="w-full h-full object-cover"
        />
      </div>
      <AccountOptions />
    </div>
  );
};

export default React.memo(AccountBar);
