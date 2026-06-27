import Sidebar from "./Sidebar";
import MobileBottomNav from "./MobileBottomNav";

function DashboardLayout({ children }) {
  return (
    <div
      className="relative flex min-h-screen w-full overflow-x-hidden"
      aria-label="Dashboard layout"
    >
      <Sidebar />

      <div className="flex-1 min-w-0 pb-24 lg:pb-0 overflow-x-hidden">
        {children}
      </div>

      <MobileBottomNav />
    </div>
  );
}

export default DashboardLayout;