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
          h-20
          bg-black/30
          backdrop-blur-2xl
          border
          border-white/10
          rounded-3xl
          flex
          items-center
          justify-around
          px-2
        "
      >

        {items.map((item)=>{

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

              className="
                relative
                w-16
                h-16
                flex
                flex-col
                items-center
                justify-center
                gap-1
                rounded-2xl
                transition-all
                duration-300
              "
            >

              {active && (
                <span
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    bg-purple-500/15
                  "
                />
              )}


              <Icon
                size={20}
                className={`
                  relative
                  z-10
                  transition
                  ${
                    active
                    ?
                    "text-purple-400"
                    :
                    "text-gray-400"
                  }
                `}
              />


              <span
                className={`
                  relative
                  z-10
                  text-[11px]
                  transition
                  ${
                    active
                    ?
                    "text-purple-400"
                    :
                    "text-gray-400"
                  }
                `}
              >
                {item.label}
              </span>


            </button>

          );

        })}

      </div>

    </nav>
  );
}


export default MobileBottomNav;