"use server";

import { Redis } from "@upstash/redis";

export default async function signup(
  prevState: { email: string; password: string; message: string },
  formData: FormData
) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const redis = new Redis({
      url: "https://charming-airedale-36398.upstash.io",
      token: "AY4uAAIncDE3ZjNmMWYyMGY5Y2I0NzM2OTVlMGQwMGM4ZTA4NjdiMHAxMzYzOTg",
    });

    const data = await redis.get(email);

    if (data !== null) return { ...prevState, message: "email-exists" };
    else {
      const register = await redis.set(email.toLowerCase(), password);
      return { email: email, password: password, message: "registered" };
    }
  } catch (error: any) {
    console.log(error.message);
    return { email: "", password: "", message: "failed" };
  }
}
