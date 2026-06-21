import StatsCard from "./StatsCard";
import { useFocus } from "../../context/FocusContext";


function Statistics() {


  const {
    sessions,
  } = useFocus();



  const totalSessions =
    sessions.length;



  const totalMinutes =
    sessions.reduce(
      (sum, session) =>
        sum + session.duration / 60,
      0
    );



  const today =
    new Date().toDateString();



  const todaySessions =
    sessions.filter(
      (session) =>
        new Date(
          session.date
        ).toDateString() === today
    ).length;



  const uniqueDays =
    [
      ...new Set(
        sessions.map(
          (session) =>
            new Date(
              session.date
            ).toDateString()
        )
      ),
    ];



  const streak =
    uniqueDays.length;



  const hours =
    Math.floor(
      totalMinutes / 60
    );



  const minutes =
    Math.floor(
      totalMinutes % 60
    );




  return (

    <section

      className="mt-10"

      aria-labelledby="statistics-title"

    >



      <div className="mb-8">


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

        role="list"

        aria-label="Focus statistics"

      >



        <div role="listitem">

          <StatsCard

            title="Total Focus Time"

            value={`${hours}h ${minutes}m`}

          />

        </div>





        <div role="listitem">

          <StatsCard

            title="Sessions"

            value={totalSessions}

          />

        </div>





        <div role="listitem">

          <StatsCard

            title="Today"

            value={todaySessions}

          />

        </div>





        <div role="listitem">

          <StatsCard

            title="Streak"

            value={`${streak} days`}

          />

        </div>



      </div>


    </section>

  );

}


export default Statistics;