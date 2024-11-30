import Form from "@/components/Form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup/Login",
  description: "This is Signup and Login page.",
};

export default function SignupLogin({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <Form locale={locale} />
    </main>
  );
}
