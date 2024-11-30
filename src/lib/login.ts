"use server";

import { Redis } from "@upstash/redis";

export default async function login(
  prevState: { email: string; password: string; message: string },
  formData: FormData
) {
  const email = formData.get("email") as string;
  const password = formData.get("password");
  const redis = new Redis({
    url: "https://charming-airedale-36398.upstash.io",
    token: "AY4uAAIncDE3ZjNmMWYyMGY5Y2I0NzM2OTVlMGQwMGM4ZTA4NjdiMHAxMzYzOTg",
  });

  const data = await redis.get(email.toLowerCase());

  if (data === null) return { ...prevState, message: "wrong-password-email" };
  else if (data == password)
    return { email: email, password: password, message: "loged-in" };
  else return { ...prevState, message: "wrong-password-email" };
}
