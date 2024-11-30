import Link from "next/link";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-[12px] md:text-[26px] lg:text-3xl text-pink-100">
      <div>
        <div>Do not worry, I give you time,</div>
        <div className="indent-5 md:indent-20 lg:indent-32 mt-1 md:mt-5">
          You can think more to find out your password.
        </div>
      </div>
      <Link
        href="/"
        className="active:outline active:outline-black mt-6 h-12 bg-gradient-to-r from-blue-950 to-blue-700 rounded-xl text-xl text-slate-50 font-semibold tracking-wider flex items-center px-6"
      >
        Go to login page
      </Link>
    </div>
  );
};

export default ForgotPassword;
