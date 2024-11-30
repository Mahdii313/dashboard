import "animate.css";
import { memo } from "react";

function Loading() {
  return (
    <div className="overflow-hidden h-screen">
      <div className="animate__animated animate__fadeIn animate__faster w-full h-full bg-slate-200 flex justify-center items-center">
        <div className="animate__animated animate__bounce animate__infinite text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-slate-800 font-bold">
          Loading
        </div>
      </div>
    </div>
  );
}

export default memo(Loading);
