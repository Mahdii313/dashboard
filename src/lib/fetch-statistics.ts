"use server";

export default async function fetchStatistics(email: string) {
  await new Promise((r) => setTimeout(r, 10000));
  console.log("Fetched");
}
