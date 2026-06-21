import {
  useMemo,
} from "react";

import StatsCard from "./StatsCard";

import {
  useFocus,
} from "../../context/FocusContext";



function Statistics() {


  const {
    sessions,
  } = useFocus();





  const stats =
    useMemo(() => {


      const today =
        new Date().toDateString();



      let totalMinutes = 0;

      let todaySessions = 0;


      const uniqueDays =
        new Set();




      sessions.forEach(
        (session) => {


          totalMinutes +=
            session.duration / 60;



          const sessionDate =
            new Date(
              session.date
            ).toDateString();



          uniqueDays.add(
            sessionDate
          );



          if (
            sessionDate === today
          ) {

            todaySessions++;

          }


        }
      );




      return {

        totalSessions:
          sessions.length,


        totalMinutes,


        todaySessions,


        streak:
          uniqueDays.size,

      };


    }, [sessions]);








  const hours =
    Math.floor(
      stats.totalMinutes / 60
    );



  const minutes =
    Math.floor(
      stats.totalMinutes % 60
    );






  return (

    <section
      className="mt-10"
      aria-labelledby="statistics-title"
    >



      <div
        className="mb-8"
      >


        <h2

          id="statistics-title"

          className="
            text-3xl
            font-bold
            theme-text
          "

        >

          Statistics


        </h2>





        <p

          className="
            theme-text-muted
            mt-2
          "

        >

          Track your focus progress.


        </p>



      </div>








      <div

        className="
          grid
          md:grid-cols-4
          gap-6
        "

      >




        <StatsCard

          title="Total Focus Time"

          value={
            `${hours}h ${minutes}m`
          }

        />





        <StatsCard

          title="Sessions"

          value={
            stats.totalSessions
          }

        />





        <StatsCard

          title="Today"

          value={
            stats.todaySessions
          }

        />





        <StatsCard

          title="Streak"

          value={
            `${stats.streak} days`
          }

        />




      </div>



    </section>

  );

}


export default Statistics;