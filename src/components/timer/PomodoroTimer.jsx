import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Play,
  Pause,
  RotateCcw,
} from "lucide-react";

import Card from "../ui/Card";
import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";


const FOCUS_TIME =
  25 * 60;

const SHORT_BREAK =
  5 * 60;

const LONG_BREAK =
  15 * 60;



const radius = 120;



const modeLabel = {
  focus: "Focus",
  shortBreak: "Short Break",
  longBreak: "Long Break",
};




function PomodoroTimer() {


  const [isRunning, setIsRunning] =
    useState(false);



  const [sessionCount, setSessionCount] =
    useState(1);



  const [mode, setMode] =
    useState("focus");



  const [timeLeft, setTimeLeft] =
    useState(FOCUS_TIME);






  useEffect(() => {


    let interval;



    if (
      isRunning &&
      timeLeft > 0
    ) {


      interval =
        setInterval(() => {


          setTimeLeft(
            (prev) => prev - 1
          );


        }, 1000);


    }





    if (
      timeLeft === 0 &&
      isRunning
    ) {


      setIsRunning(false);



      if (
        mode === "focus"
      ) {


        if (
          sessionCount === 4
        ) {


          setMode(
            "longBreak"
          );


          setTimeLeft(
            LONG_BREAK
          );


          setSessionCount(1);



        } else {


          setMode(
            "shortBreak"
          );


          setTimeLeft(
            SHORT_BREAK
          );


        }



      } else {


        setMode(
          "focus"
        );


        setTimeLeft(
          FOCUS_TIME
        );



        if (
          mode === "shortBreak"
        ) {


          setSessionCount(
            (prev) =>
              prev + 1
          );


        }


      }


    }




    return () => {

      if (interval) {

        clearInterval(interval);

      }

    };



  }, [
    isRunning,
    timeLeft,
    mode,
    sessionCount,
  ]);







  const resetTimer =
    useCallback(() => {


      setIsRunning(false);


      setMode(
        "focus"
      );


      setSessionCount(1);


      setTimeLeft(
        FOCUS_TIME
      );


    }, []);









  const formatTime =
    useCallback(
      (seconds) => {


        const mins =
          Math.floor(
            seconds / 60
          );



        const secs =
          seconds % 60;



        return `${String(mins).padStart(
          2,
          "0"
        )}:${String(secs).padStart(
          2,
          "0"
        )}`;


      },
      []
    );








  const currentDuration =
    useMemo(() => {


      if (
        mode === "focus"
      )

        return FOCUS_TIME;



      if (
        mode === "shortBreak"
      )

        return SHORT_BREAK;



      return LONG_BREAK;



    }, [mode]);







  const circumference =
    useMemo(
      () =>
        2 * Math.PI * radius,
      []
    );







  const offset =
    useMemo(() => {


      const progress =
        (
          (currentDuration -
            timeLeft)
          /
          currentDuration
        ) * 100;



      return (
        circumference -
        (
          progress / 100
        ) *
        circumference
      );


    }, [
      currentDuration,
      timeLeft,
      circumference,
    ]);







  return (

    <section
      className="mt-8"
    >



      <SectionTitle

        title="Pomodoro Mode"

        subtitle="Work smarter with structured focus sessions."

      />





      <Card
        className="
          max-w-5xl
          mx-auto
        "
      >




        <div
          className="
            text-center
            mb-8
          "
        >


          <p
            className="
              text-purple-400
              font-semibold
            "
          >

            {modeLabel[mode]}


          </p>




          <p
            className="
              text-gray-400
              mt-2
            "
          >

            Session {sessionCount} / 4


          </p>



        </div>







        <div
          className="
            flex
            justify-center
          "
        >



          <div
            className="relative"
          >



            <svg

              width="300"

              height="300"

              aria-label="Pomodoro progress"

            >



              <circle

                cx="150"

                cy="150"

                r={radius}

                stroke="rgba(255,255,255,0.1)"

                strokeWidth="14"

                fill="none"

              />





              <circle

                cx="150"

                cy="150"

                r={radius}

                stroke="#8b5cf6"

                strokeWidth="14"

                fill="none"

                strokeLinecap="round"

                strokeDasharray={
                  circumference
                }

                strokeDashoffset={
                  offset
                }

                transform="
                  rotate(-90 150 150)
                "

              />



            </svg>





            <div

              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                text-6xl
                font-bold
              "

            >

              {
                formatTime(
                  timeLeft
                )
              }


            </div>




          </div>



        </div>








        <div

          className="
            flex
            justify-center
            gap-4
            mt-8
          "

        >



          <Button

            onClick={() =>
              setIsRunning(
                (prev) =>
                  !prev
              )
            }


            aria-label={
              isRunning
                ? "Pause Pomodoro timer"
                : "Start Pomodoro timer"
            }

          >


            {
              isRunning ? (

                <>

                  <Pause size={18}/>

                  Pause

                </>


              ) : (

                <>

                  <Play size={18}/>

                  Start

                </>

              )
            }



          </Button>







          <Button

            variant="secondary"

            onClick={
              resetTimer
            }

            aria-label="Reset Pomodoro timer"

          >


            <RotateCcw size={18}/>


            Reset



          </Button>



        </div>




      </Card>



    </section>

  );

}



export default PomodoroTimer;