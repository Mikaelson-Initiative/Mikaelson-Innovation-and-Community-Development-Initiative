import { AdminNavbar } from "@/features/admin/components/navbar";
import { QuickActions } from "@/features/admin/components/quick-actions";
import { AdminDashboardStats } from "@/features/admin/components/stats";
import { AdminDataTable } from "@/features/admin/components/table/admin-data-table";
import { User } from "@/features/admin/components/table/columns";

const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    joinedDate: "2025-11-01",
    interest: "Mentorship",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    joinedDate: "2025-10-15",
    interest: "Habit tracking",
  },
  {
    id: "3",
    name: "Michael Johnson",
    email: "michael@example.com",
    joinedDate: "2025-09-20",
    interest: "Community",
  },
];

const AdminDashboardHome = () => {
  return (
    <div className="pb-20 bg-brand-bg-gray">
      <AdminNavbar />
      <AdminDashboardStats />
      <AdminDataTable data={users} />
      <QuickActions />
    </div>
  );
};

export default AdminDashboardHome;
