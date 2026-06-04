import {
  LayoutDashboard,
  Timer,
  Music,
  BarChart3,
} from "lucide-react";

function Sidebar() {
  const items = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
    },
    {
      icon: Timer,
      label: "Focus",
    },
    {
      icon: Music,
      label: "Sounds",
    },
    {
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
        bg-white/5
        backdrop-blur-xl
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

          return (
            <button
              key={item.label}
              className="
                w-full
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-xl
                text-left
                text-gray-300
                hover:bg-white/10
                transition
                mb-2
              "
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