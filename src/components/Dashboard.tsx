"use client";

import NotFound from "./NotFound";
import { useSelector } from "react-redux";
import DashboardNav from "./DashboardContent/DashboardNav";
import DashboardSidebar from "./DashboardContent/DashboardSidebar";

function Dashboard({ searchParams }: any) {
  if (!searchParams.account) {
    return <NotFound />;
  }

  const user = useSelector((state: any) => state.user);

  if (searchParams.account !== user.hashedEmail) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen relative">
      <DashboardNav />
      <DashboardSidebar />
    </div>
  );
}

export default Dashboard;
