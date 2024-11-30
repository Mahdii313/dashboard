import type { Metadata } from "next";
import DashboardComponent from "@/components/Dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "This is dashboard",
};

async function Dashboard({ searchParams }: any) {
  return <DashboardComponent searchParams={searchParams} />;
}

export default Dashboard;
