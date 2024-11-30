"use client";

import { Dispatch, SetStateAction } from "react";
import { memo } from "react";

const Switch = ({
  state,
  setState,
  disabled,
}: {
  state: string;
  setState: Dispatch<SetStateAction<"signup" | "login">>;
  disabled: boolean;
}) => {
  return (
    <div className="select-none relative h-12 bg-transparent border w-full rounded-xl flex justify-around items-center text-xl">
      {disabled && (
        <div className="absolute top-0 left-0 h-full w-full rounded-xl bg-transparent cursor-not-allowed z-50"></div>
      )}
      <div
        className={`${
          state === "login"
            ? "text-slate-50 font-thin"
            : "text-slate-950 font-bold"
        } cursor-pointer w-1/2 h-full text-center z-10 flex items-center justify-center`}
        onClick={() => {
          if (state !== "login") setState("login");
        }}
      >
        Login
      </div>
      <div
        className={`${
          state === "signup"
            ? "text-slate-50 font-thin"
            : "text-slate-950 font-bold"
        } cursor-pointer w-1/2 h-full text-center z-10 flex items-center justify-center`}
        onClick={() => {
          if (state !== "signup") setState("signup");
        }}
      >
        Signup
      </div>
      <div
        className={`transition-all duration-500 ease-switchCubic absolute top-0 h-full w-1/2 bg-black rounded-xl bg-gradient-to-r from-blue-950 to-blue-700 ${
          state === "signup" ? "right-0" : "right-0 -translate-x-full"
        }`}
      ></div>
    </div>
  );
};

export default memo(Switch);
