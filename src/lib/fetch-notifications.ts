"use server";

export default async function fetchNotifications() {
  await new Promise((r) => setTimeout(r, 5000));
  console.log("Notifications fetched.");
  return [
    {
      subject: "Salam",
      body: "Khosh Amadid.",
      tag: "Well",
      timeAgo: "5 days",
    },
    {
      subject: "Hire Me",
      body: "You can hire me for develop your custom website, This is my first industrial project, I expect you to be patient.",
      tag: "Off",
      timeAgo: "10 days",
    },
    {
      subject: "Job",
      body: "I am looking for a job.",
      tag: "Job",
      timeAgo: "11 days",
    },
  ];
  // return [];
}
