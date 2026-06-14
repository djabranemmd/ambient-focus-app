import Sidebar from "./Sidebar";
import MobileBottomNav from "./MobileBottomNav";


function DashboardLayout({
  children,
}) {

  return (

    <div
      className="
        flex
        min-h-screen
      "
    >

      <Sidebar />


      <div
        className="
          flex-1
          pb-24
          lg:pb-0
        "
      >

        {children}

      </div>


      <MobileBottomNav />

    </div>

  );

}


export default DashboardLayout;