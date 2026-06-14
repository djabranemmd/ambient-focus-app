import {
  LayoutDashboard,
  Timer,
  Music,
  BarChart3,
  Sparkles,
} from "lucide-react";

import {
  useNavigation,
} from "../../context/NavigationContext.jsx";

import {
  useFocus,
} from "../../context/FocusContext.jsx";


function Sidebar() {

  const {
    activePage,
    setActivePage,
  } = useNavigation();


  const {
    sessions,
  } = useFocus();


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


  const totalSeconds =
    sessions.reduce(
      (total, session) =>
        total + session.duration,
      0
    );


  const hours =
    Math.floor(
      totalSeconds / 3600
    );


  const minutes =
    Math.floor(
      (totalSeconds % 3600) / 60
    );


  return (

    <aside
      className="
        hidden
        lg:flex
        flex-col
        w-72
        min-h-screen
        border-r
        border-white/10
        bg-black/20
        backdrop-blur-2xl
        p-5
      "
    >


      {/* Logo */}

      <div
        className="
          mb-10
          px-3
        "
      >

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          <div
            className="
              h-11
              w-11
              rounded-2xl
              bg-gradient-to-br
              from-purple-500
              to-blue-500
              flex
              items-center
              justify-center
              shadow-lg
            "
          >

            <Sparkles
              size={22}
            />

          </div>


          <div>

            <h1
              className="
                text-xl
                font-bold
              "
            >
              Ambient Focus
            </h1>


            <p
              className="
                text-xs
                text-gray-400
              "
            >
              Productivity App
            </p>

          </div>

        </div>

      </div>



      {/* Navigation */}

      <nav
        className="
          flex-1
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


              className={`
                relative
                w-full
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-2xl
                mb-3
                transition-all
                duration-300

                ${
                  active
                  ?
                  "bg-purple-500/20 text-white"
                  :
                  "text-gray-400 hover:bg-white/10 hover:text-white"
                }
              `}

            >


              {
                active && (

                  <span
                    className="
                      absolute
                      left-0
                      w-1
                      h-7
                      rounded-r-full
                      bg-purple-500
                    "
                  />

                )
              }


              <Icon
                size={19}
              />


              <span>
                {item.label}
              </span>


            </button>

          );

        })}


      </nav>




      {/* Stats Card */}

      <div
        className="
          mt-auto
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-5
        "
      >

        <p
          className="
            text-sm
            text-gray-400
            mb-3
          "
        >
          Focus Member
        </p>


        <div
          className="
            text-2xl
            font-bold
          "
        >
          🎯
          {sessions.length}
        </div>


        <p
          className="
            text-xs
            text-gray-400
            mt-2
          "
        >
          Completed Sessions
        </p>



        <div
          className="
            mt-4
            text-sm
            text-purple-400
          "
        >

          {hours}h {minutes}m
          {" "}
          focused

        </div>


      </div>


    </aside>

  );

}


export default Sidebar;