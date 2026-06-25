import {
  memo,
} from "react";

import {
  Timer,
  Target,
  Flame,
} from "lucide-react";

import Card from "../ui/Card";

import {
  useFocus,
} from "../../context/FocusContext";



function DashboardHero() {


  const {
    sessions,
  } = useFocus();




  const today =
    new Date().toDateString();



  const todayMinutes =
    sessions
      .filter(
        (session) =>
          new Date(
            session.date
          ).toDateString() === today
      )
      .reduce(
        (total, session) =>
          total + session.duration / 60,
        0
      );





  const cards = [

    {
      icon: Timer,

      title: "Today's Focus",

      value:
        `${Math.floor(todayMinutes / 60)}h ${
          Math.floor(todayMinutes % 60)
        }m`,
    },


    {
      icon: Target,

      title: "Daily Goal",

      value:
        "4 Hours",
    },


    {
      icon: Flame,

      title: "Streak",

      value:
        `${new Set(
          sessions.map(
            (session) =>
              new Date(
                session.date
              ).toDateString()
          )
        ).size} Days`,
    },

  ];







  return (

    <Card>


      <div

        className="
          flex
          flex-col
          gap-6
        "

      >



        <div>


          <h2

            className="
              text-3xl
              sm:text-4xl
              font-bold
              theme-text
            "

          >

            Build your focus habit 🚀

          </h2>



          <p

            className="
              theme-text-muted
              mt-3
              max-w-xl
            "

          >

            Stay consistent, track your sessions,
            and create a better productivity routine.

          </p>


        </div>






        <div

          className="
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-4
          "

        >


          {
            cards.map((item) => {


              const Icon =
                item.icon;



              return (

                <div

                  key={
                    item.title
                  }

                  className="
                    rounded-2xl
                    bg-black/5
                    dark:bg-white/5
                    p-4
                  "

                >

                  <Icon

                    size={22}

                    className="
                      text-purple-400
                    "

                  />


                  <p

                    className="
                      text-sm
                      theme-text-muted
                      mt-3
                    "

                  >

                    {item.title}

                  </p>



                  <p

                    className="
                      text-2xl
                      font-bold
                      theme-text
                      mt-1
                    "

                  >

                    {item.value}

                  </p>


                </div>

              );


            })
          }



        </div>



      </div>



    </Card>

  );

}



export default memo(DashboardHero);