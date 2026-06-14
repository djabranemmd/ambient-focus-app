import {
  LayoutDashboard,
  Timer,
  Music,
  BarChart3,
} from "lucide-react";

import {
  useNavigation,
} from "../../context/NavigationContext.jsx";

function Sidebar() {
  const {
    activePage,
    setActivePage,
  } = useNavigation();

  const items = [
    {
      id: "dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
    },
    {
      id: "focus",
      icon: Timer,
      label: "Focus",
    },
    {
      id: "sounds",
      icon: Music,
      label: "Sounds",
    },
    {
      id: "statistics",
      icon: BarChart3,
      label: "Statistics",
    },
  ];

  return (
    <aside
      className="
        hidden
        lg:flex
        flex-col
        w-64
        min-h-screen
        border-r
        border-white/10
        bg-black/10
        backdrop-blur-2xl
      "
    >
      <div className="p-8">
        <h1 className="text-2xl font-bold">
          Ambient Focus
        </h1>

        <p className="text-sm text-gray-400 mt-2">
          Productivity Dashboard
        </p>
      </div>

      <nav className="px-4">
        {items.map((item) => {
          const Icon = item.icon;

          const active =
            activePage === item.id;

          return (
            <button
              key={item.id}
              onClick={() =>
                setActivePage(item.id)
              }
              className={`
                w-full
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-xl
                text-left
                transition
                mb-2

                ${
                  active
                    ? "bg-purple-600 text-white"
                    : "text-gray-300 hover:bg-white/10"
                }
              `}
            >
              <Icon size={18} />

              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;