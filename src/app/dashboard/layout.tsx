import DashboardLayout from "@/features/dashboard/components/dashboard-layout";
import React, { PropsWithChildren } from "react";

const DashboardRootLayout = ({ children }: PropsWithChildren) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default DashboardRootLayout;
