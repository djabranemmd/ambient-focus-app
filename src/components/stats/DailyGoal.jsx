import {
  memo,
} from "react";

import {
  useFocus,
} from "../../context/FocusContext";

import Card from "../ui/Card";


const DAILY_GOAL_MINUTES = 240;



function DailyGoal() {

  const {
    sessions,
  } = useFocus();



  const totalMinutesToday =
    sessions
      .filter(
        (session) =>
          new Date(
            session.date
          ).toDateString() ===
          new Date().toDateString()
      )
      .reduce(
        (sum, session) =>
          sum + session.duration / 60,
        0
      );



  const progress =
    Math.min(
      (
        totalMinutesToday /
        DAILY_GOAL_MINUTES
      ) * 100,
      100
    );



  return (

    <Card>


      <h3
        className="
          text-xl
          font-semibold
          theme-text
        "
      >
        Daily Goal
      </h3>



      <p
        className="
          theme-text-muted
          mt-2
        "
      >
        Goal: 4 Hours
      </p>




      <div
        className="
          mt-6
        "
      >

        <div
          className="
            h-3
            bg-black/10
            dark:bg-white/10
            rounded-full
            overflow-hidden
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
              width:
                `${progress}%`,
            }}

          />


        </div>


      </div>





      <p
        className="
          mt-4
          text-sm
          theme-text-muted
        "
      >

        {Math.floor(
          totalMinutesToday / 60
        )}

        h{" "}

        {Math.floor(
          totalMinutesToday % 60
        )}

        m / 4h


      </p>



    </Card>

  );

}



export default memo(DailyGoal);