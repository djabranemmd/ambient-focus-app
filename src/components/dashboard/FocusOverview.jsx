import {
  memo,
} from "react";

import {
  Clock,
  PlayCircle,
} from "lucide-react";

import Card from "../ui/Card";

import {
  useFocus,
} from "../../context/FocusContext";



function FocusOverview() {


  const {
    sessions,
  } = useFocus();




  const latestSession =
    sessions.length > 0
      ? sessions[sessions.length - 1]
      : null;





  const totalSeconds =
    sessions.reduce(
      (total, session) =>
        total + session.duration,
      0
    );




  const totalMinutes =
    Math.floor(
      totalSeconds / 60
    );





  return (

    <Card>


      <div

        className="
          flex
          items-center
          justify-between
          mb-6
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

            Focus Overview

          </h3>



          <p

            className="
              text-sm
              theme-text-muted
              mt-1
            "

          >

            Your recent focus activity.

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

          <PlayCircle

            size={24}

            className="
              text-purple-400
            "

          />

        </div>


      </div>






      <div

        className="
          space-y-4
        "

      >


        <div

          className="
            flex
            items-center
            justify-between
            rounded-2xl
            bg-black/5
            dark:bg-white/5
            p-4
          "

        >

          <div

            className="
              flex
              items-center
              gap-3
            "

          >

            <Clock

              size={20}

              className="
                text-purple-400
              "

            />


            <span

              className="
                theme-text-muted
              "

            >

              Total Focus Time

            </span>


          </div>



          <strong

            className="
              theme-text
            "

          >

            {totalMinutes} min

          </strong>


        </div>





        <div

          className="
            rounded-2xl
            bg-black/5
            dark:bg-white/5
            p-4
          "

        >

          <p

            className="
              text-sm
              theme-text-muted
            "

          >

            Last Session

          </p>




          <p

            className="
              theme-text
              font-semibold
              mt-2
            "

          >

            {
              latestSession

                ?

                `${Math.floor(
                  latestSession.duration / 60
                )} minutes`

                :

                "No sessions yet"

            }

          </p>


        </div>



      </div>



    </Card>

  );

}



export default memo(FocusOverview);