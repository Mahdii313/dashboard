"use client";

import { useEffect, useState, useRef } from "react";
import { useFormState } from "react-dom";
import Switch from "./Switch";
import FormButton from "./FormButton";
import { patterns } from "@/data";
import signup from "@/lib/signup";
import login from "@/lib/login";
import Link from "next/link";
import Notification from "./Notification";
import { useRouter } from "next/navigation";
import bcrypt from "bcryptjs";
import { useDispatch } from "react-redux";
import { log_in, log_out } from "@/GlobalRedux/features/userSlice";
import { set_locale } from "@/GlobalRedux/features/localeSlice";
import { set_part } from "@/GlobalRedux/features/partSlice";

type PasswordColor = "rgb(226 232 240)" | "red" | "orange" | "yellow" | "green";

const Form = ({ locale }: { locale: string }) => {
  const router = useRouter();
  const [state, setState] = useState<"signup" | "login">("login");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [emailColor, setEmailColor] = useState<
    "rgb(226 232 240)" | "red" | "green"
  >("rgb(226 232 240)");
  const [passwordColor, setPasswordColor] =
    useState<PasswordColor>("rgb(226 232 240)");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState<
    "rgb(226 232 240)" | "red" | "green"
  >("rgb(226 232 240)");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [alert, setAlert] = useState<
    "registered" | "wrong-password-email" | "email-exists"
    // @ts-ignore
  >("");
  const passwordSecurity = useRef(0);
  const dispatch = useDispatch();

  // @ts-ignore
  const [signupActionState, signupAction] = useFormState(signup, {
    email: "",
    password: "",
    message: "",
  });
  // @ts-ignore
  const [loginActionState, loginAction] = useFormState(login, {
    email: "",
    password: "",
    message: "",
  });

  async function createQueryString(infos: {
    email: string;
    password: string;
    message: string;
  }) {
    const params = new URLSearchParams();
    const hashedEmail = await bcrypt.hash(email, 10);

    params.set("account", hashedEmail);

    dispatch(
      log_in({
        email: infos.email,
        password: infos.password,
        hashedEmail: hashedEmail,
      })
    );

    router.push("/" + locale + "/dashboard" + "?" + params.toString());
  }

  useEffect(() => {
    dispatch(log_out());
    dispatch(set_part("Dashboard"));
  }, []);

  useEffect(() => {
    if (locale) {
      dispatch(set_locale(locale));
    }
  }, [locale]);

  useEffect(() => {
    // @ts-ignore
    setAlert(signupActionState.message);
    if (signupActionState.message === "registered") setState("login");
  }, [signupActionState]);

  useEffect(() => {
    if (loginActionState.message === "wrong-password-email")
      setAlert(loginActionState.message);
    else if (loginActionState?.message === "loged-in") {
      // @ts-ignore
      createQueryString(loginActionState);
    }
  }, [loginActionState]);

  useEffect(() => {
    if (state === "signup") {
      let checkEmail = patterns.email.test(email);
      if (email.length === 0) setEmailColor("rgb(226 232 240)");
      else if (checkEmail) setEmailColor("green");
      else setEmailColor("red");
    }
  }, [email]);
  useEffect(() => {
    if (state === "signup") {
      passwordSecurity.current = 0;
      if (patterns.passwordSmallLetter.test(password))
        passwordSecurity.current += 1;
      if (patterns.passwordCapitalLetter.test(password))
        passwordSecurity.current += 1;
      if (patterns.passwordNumber.test(password)) passwordSecurity.current += 1;
      if (patterns.passwordSpecialChars.test(password))
        passwordSecurity.current += 2;
      if (password.length >= 5) passwordSecurity.current += 2;

      handlePasswordColor(passwordSecurity.current);
      if (confirmPassword.length !== 0) {
        handleConfirmPasswordColor();
      }
    }
  }, [password]);
  useEffect(() => {
    handleConfirmPasswordColor();
  }, [confirmPassword]);
  useEffect(() => {
    setEmailColor("rgb(226 232 240)");
    setPasswordColor("rgb(226 232 240)");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }, [state]);

  function handlePasswordColor(ps: number) {
    if (password.length === 0) return setPasswordColor("rgb(226 232 240)");
    if (ps <= 2) setPasswordColor("red");
    else if (ps <= 4) setPasswordColor("orange");
    else if (ps <= 6) setPasswordColor("yellow");
    else if (ps === 7) setPasswordColor("green");
  }

  function handleConfirmPasswordColor() {
    if (confirmPassword.length === 0)
      setConfirmPasswordColor("rgb(226 232 240)");
    else if (confirmPassword !== password) setConfirmPasswordColor("red");
    else setConfirmPasswordColor("green");
  }

  return (
    <form
      action={(() => (state === "signup" ? signupAction : loginAction))()}
      className="relative bg-slate-50 w-96 rounded-xl p-6"
    >
      {alert && <Notification variant={alert} setAlert={setAlert} />}

      <h1 className="text-center text-3xl text-slate-950 font-bold">
        {state === "signup" ? "Signup Form" : "Login Form"}
      </h1>
      <div className="mt-6">
        <Switch state={state} setState={setState} disabled={submitting} />
      </div>
      {state === "signup" && (
        <>
          <div className="mt-6">
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Email Address"
              style={{
                borderColor: emailColor,
                borderWidth: emailColor !== "rgb(226 232 240)" ? 2 : 1,
              }}
              className="p-3 focus:outline-none border bg-transparent rounded-xl w-full transition-colors duration-500"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              style={{
                borderColor: passwordColor,
                borderWidth: passwordColor !== "rgb(226 232 240)" ? 2 : 1,
              }}
              className="p-3 focus:outline-none border bg-transparent rounded-xl w-full mt-3 transition-colors duration-500"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              value={confirmPassword}
              placeholder="Confirm Password"
              style={{
                borderColor: confirmPasswordColor,
                borderWidth:
                  confirmPasswordColor !== "rgb(226 232 240)" ? 2 : 1,
              }}
              className="p-3 focus:outline-none border bg-transparent rounded-xl w-full mt-3 transition-colors duration-500"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="mt-6">
            <FormButton
              title={state}
              disabled={
                password.length < 8 ||
                emailColor !== "green" ||
                password !== confirmPassword
              }
              setSubmitting={setSubmitting}
            />
          </div>
        </>
      )}

      {state === "login" && (
        <>
          <div className="mt-6">
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Email Address"
              className="p-3 focus:outline-none border bg-transparent rounded-xl w-full transition-colors duration-500"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              className="p-3 focus:outline-none border bg-transparent rounded-xl w-full mt-3 transition-colors duration-500"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link
              href={`/${locale}/forgot-password`}
              className="text-[12px] text-blue-500 active:text-blue-700"
            >
              Forgot password?
            </Link>
          </div>
          <div className="mt-6">
            <FormButton
              title={state}
              disabled={email.length === 0 || password.length === 0}
              setSubmitting={setSubmitting}
            />
          </div>
          <div className="mt-5">
            <div className="text-[12px] font-semibold text-slate-950">
              Not a member?{" "}
              <span
                className="cursor-pointer text-[12px] text-blue-500 active:text-blue-700 font-normal"
                onClick={() => setState("signup")}
              >
                Signup now
              </span>
            </div>
          </div>
        </>
      )}
    </form>
  );
};

export default Form;
