import "animate.css";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { memo } from "react";

type Notification = {
  variant: "registered" | "wrong-password-email" | "email-exists" | "failed";
  setAlert: Function;
};

const Notification = ({ variant, setAlert }: Notification) => {
  function setTitle() {
    switch (variant) {
      case "registered":
        return "You have successfully registered";
      case "email-exists":
        return "This email is already exists";
      case "wrong-password-email":
        return "Email or password is wrong";
      case "failed":
        return "Something went rong";
    }
  }

  setTimeout(() => setAlert(""), 5000);
  return (
    <div
      className={`animate__animated animate__fadeIn animate__faster flex items-center justify-between w-96 px-6 py-3 ${
        variant === "registered"
          ? "text-green-500 border-green-500"
          : "text-red-500 border-red-500"
      } border border-dashed font-semibold rounded-xl absolute left-0 -top-16`}
    >
      <div>{setTitle()}</div>
      {variant === "registered" ? (
        <FaRegCheckCircle size={30} />
      ) : (
        <MdErrorOutline size={30} />
      )}
    </div>
  );
};

export default memo(Notification);
