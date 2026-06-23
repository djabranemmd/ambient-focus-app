import {
  memo,
} from "react";

import {
  CheckCircle,
  Target,
} from "lucide-react";

import {
  useFocus,
} from "../../context/FocusContext";

import Card from "../ui/Card";


const DAILY_GOAL = 240;




function TodayProgress() {


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




  const progress =
    Math.min(
      (todayMinutes / DAILY_GOAL) * 100,
      100
    );




  const completed =
    todayMinutes >= DAILY_GOAL;




  return (

    <Card>


      <div

        className="
          flex
          items-center
          justify-between
        "

      >

        <div>


          <h3

            className="
              text-xl
              font-semibold
              theme-text
            "

          >

            Today's Progress

          </h3>



          <p

            className="
              theme-text-muted
              mt-1
              text-sm
            "

          >

            Keep your focus streak alive.

          </p>


        </div>




        <div

          className="
            w-12
            h-12
            rounded-2xl
            bg-purple-500/20
            flex
            items-center
            justify-center
          "

        >

          {
            completed ? (

              <CheckCircle
                className="text-green-400"
                size={24}
              />

            ) : (

              <Target
                className="text-purple-400"
                size={24}
              />

            )
          }


        </div>


      </div>





      <div

        className="
          mt-6
        "

      >

        <div

          className="
            h-3
            rounded-full
            overflow-hidden
            bg-black/10
            dark:bg-white/10
          "

        >

          <div

            className="
              h-full
              bg-purple-500
              transition-all
              duration-500
            "

            style={{
              width: `${progress}%`,
            }}

          />


        </div>


      </div>





      <div

        className="
          flex
          justify-between
          mt-4
          text-sm
        "

      >

        <span

          className="
            theme-text
            font-medium
          "

        >

          {Math.floor(todayMinutes)} min

        </span>




        <span

          className="
            theme-text-muted
          "

        >

          {Math.round(progress)}%

        </span>


      </div>





    </Card>

  );

}



export default memo(TodayProgress);