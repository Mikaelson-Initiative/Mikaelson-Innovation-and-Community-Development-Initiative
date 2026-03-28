import { SidebarProvider } from '@/components/ui/sidebar';
import React, { PropsWithChildren } from 'react'
import { DashboardSidebar } from './dashboard-sidebar';
import { DashboardNavbar } from './dashboard-navbar';

const DashboardLayout = ({ children}: PropsWithChildren) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="flex flex-col gap-5 min-h-screen w-screen bg-muted">
        <DashboardNavbar />
        <div className="px-5 flex-1">{children}</div>
      </main>
    </SidebarProvider>
  );
}

export default DashboardLayout