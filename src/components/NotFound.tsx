import Link from "next/link";

function NotFound() {
  return (
    <div className="selection:bg-pink-300 text-slate-50 h-screen flex justify-center items-center flex-col overflow-hidden">
      <div className="relative text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
        <div className="absolute -top-90 sm:-top-1/2 left-1/2 -translate-x-1/2 text-pink-600 sm:text-transparent bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text font-extrabold text-[100px] sm:text-[110px] md:text-[130px] lg:text-[150px] xl:text-[230px] 2xl:text-[300px] -z-10">
          404
        </div>
        I did not found this user
      </div>
      <Link
        href="/"
        className="active:outline active:outline-black mt-6 h-12 bg-gradient-to-r from-blue-950 to-blue-700 rounded-xl text-xl text-slate-50 font-semibold tracking-wider flex items-center px-6"
      >
        Go to login page
      </Link>
    </div>
  );
}

export default NotFound;
