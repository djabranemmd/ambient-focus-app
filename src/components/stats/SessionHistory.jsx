import {
  memo,
} from "react";

import {
  useFocus,
} from "../../context/FocusContext";

import Card from "../ui/Card";


function SessionHistory() {

  const {
    sessions,
  } = useFocus();



  const recentSessions =
    [...sessions]
      .reverse()
      .slice(0, 5);



  return (

    <Card>


      <h3
        className="
          text-xl
          font-semibold
          theme-text
        "
      >
        Recent Sessions
      </h3>




      <div
        className="
          mt-5
          space-y-3
        "
      >

        {
          recentSessions.length === 0 ? (

            <p
              className="
                theme-text-muted
              "
            >
              No sessions yet.
            </p>


          ) : (


            recentSessions.map(
              (session) => (

                <div

                  key={
                    session.date
                  }

                  className="
                    flex
                    justify-between
                    items-center
                    border-b
                    border-black/10
                    dark:border-white/5
                    pb-2
                    transition-all
                    duration-300
                  "

                >


                  <span
                    className="
                      theme-text
                    "
                  >

                    {
                      Math.floor(
                        session.duration / 60
                      )
                    }

                    {" "}min

                  </span>




                  <span
                    className="
                      theme-text-muted
                      text-sm
                    "
                  >

                    {
                      new Date(
                        session.date
                      ).toLocaleDateString()
                    }

                  </span>


                </div>


              )

            )


          )
        }


      </div>


    </Card>

  );

}


export default memo(SessionHistory);