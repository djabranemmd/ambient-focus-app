import {
  LayoutDashboard,
  Timer,
  Music,
  BarChart3,
} from "lucide-react";

import {
  useNavigation,
} from "../../context/NavigationContext.jsx";


function MobileBottomNav() {

  const {
    activePage,
    setActivePage,
  } = useNavigation();


  const items = [
    {
      id: "dashboard",
      icon: LayoutDashboard,
      label: "Home",
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
      label: "Stats",
    },
  ];


  return (
    <nav
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-50
        lg:hidden
        px-4
        pb-4
      "
    >

      <div
        className="
          bg-black/30
          backdrop-blur-2xl
          border
          border-white/10
          rounded-3xl
          p-3
          flex
          justify-around
        "
      >

        {
          items.map((item)=>{

            const Icon =
              item.icon;


            const active =
              activePage === item.id;


            return (

              <button

                key={item.id}

                onClick={() =>
                  setActivePage(
                    item.id
                  )
                }


                className={`
                  flex
                  flex-col
                  items-center
                  gap-1
                  px-3
                  py-2
                  rounded-2xl
                  transition-all
                  duration-300

                  ${
                    active
                    ?
                    "text-purple-400 bg-purple-500/10"
                    :
                    "text-gray-400"
                  }
                `}

              >

                <Icon
                  size={20}
                />

                <span
                  className="
                    text-[11px]
                  "
                >
                  {item.label}
                </span>

              </button>

            );

          })
        }

      </div>

    </nav>
  );
}


export default MobileBottomNav;