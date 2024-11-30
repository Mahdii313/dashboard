import { useFormStatus } from "react-dom";
import { Dispatch, SetStateAction, memo, useEffect } from "react";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

const FormButton = ({
  title,
  disabled,
  setSubmitting,
}: {
  title: "signup" | "login";
  disabled: boolean;
  setSubmitting: Dispatch<SetStateAction<boolean>>;
}) => {
  const status = useFormStatus();

  useEffect(() => {
    if (status.pending) setSubmitting(true);
    else setSubmitting(false);
  }, [status.pending]);

  return (
    <button
      disabled={disabled || status.pending}
      className="w-full h-12 bg-gradient-to-r from-blue-950 to-blue-700 rounded-xl text-xl text-slate-50 font-semibold tracking-wider disabled:text-slate-500 disabled:bg-gradient-to-r disabled:from-slate-300 disabled:to-slate-200 duration-1000 flex justify-center items-center"
    >
      {status.pending ? (
        <PiDotsThreeOutlineFill size={50} />
      ) : (
        title[0].toUpperCase() + title.slice(1)
      )}
    </button>
  );
};

export default memo(FormButton);
