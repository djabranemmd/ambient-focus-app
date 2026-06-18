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

      aria-label="Sidebar navigation"


      className="
        hidden
        lg:flex
        flex-col

        w-72
        min-h-screen

        theme-bg
        theme-border

        border-r

        backdrop-blur-2xl

        p-5

        transition-colors
        duration-300
      "

    >



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

            aria-hidden="true"

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

            <Sparkles size={22} />


          </div>





          <div>


            <h1

              className="
                text-xl
                font-bold
                theme-text
              "

            >

              Ambient Focus


            </h1>



            <p

              className="
                text-xs
                theme-text-muted
              "

            >

              Productivity App


            </p>


          </div>


        </div>


      </div>






      <nav

        aria-label="Primary"

        className="flex-1"

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


                type="button"


                onClick={() =>
                  setActivePage(
                    item.id
                  )
                }



                aria-label={
                  item.label
                }



                aria-current={
                  active
                    ? "page"
                    : undefined
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



                  focus:outline-none


                  focus-visible:ring-2

                  focus-visible:ring-purple-500/70



                  ${
                    active

                    ?

                    `
                    bg-purple-500/20

                    text-purple-600

                    `


                    :

                    `

                    theme-text-muted

                    hover:bg-purple-500/10

                    `

                  }

                `}


              >



                {
                  active && (


                    <span

                      aria-hidden="true"

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

                  aria-hidden="true"

                />




                <span>

                  {item.label}


                </span>



              </button>


            );


          })
        }



      </nav>







      <div

        className="
          mt-auto
          rounded-3xl
          theme-card
          backdrop-blur-xl
          p-5
        "

      >



        <p

          className="
            text-sm
            theme-text-muted
            mb-3
          "

        >

          Focus Member


        </p>





        <div

          className="
            text-2xl
            font-bold
            theme-text
          "

        >

          🎯 {sessions.length}


        </div>




        <p

          className="
            text-xs
            theme-text-muted
            mt-2
          "

        >

          Completed Sessions


        </p>





        <div

          className="
            mt-4
            text-sm
            text-purple-500
            font-medium
          "

        >

          {hours}h {minutes}m focused


        </div>




      </div>




    </aside>


  );
}
export default Sidebar;