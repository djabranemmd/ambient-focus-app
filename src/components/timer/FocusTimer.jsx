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

import { useFocus } from "../../context/FocusContext";

import useNotification from "../../hooks/useNotification";

import {
  playCompletionSound,
} from "../../utils/sound";

import Card from "../ui/Card";
import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";
import CompletionToast from "../ui/CompletionToast";


const TWENTY_FIVE = 25 * 60;
const FIFTY = 50 * 60;


function FocusTimer() {

  const {
    addSession,
  } = useFocus();


  const {
    sendNotification,
  } = useNotification();



  const [duration, setDuration] =
    useState(TWENTY_FIVE);


  const [timeLeft, setTimeLeft] =
    useState(TWENTY_FIVE);


  const [isRunning, setIsRunning] =
    useState(false);


  const [customMinutes, setCustomMinutes] =
    useState("");


  const [showCompletion, setShowCompletion] =
    useState(false);



  useEffect(() => {

    let interval;


    if (
      isRunning &&
      timeLeft > 0
    ) {

      interval = setInterval(() => {

        setTimeLeft(
          (prev) => prev - 1
        );

      }, 1000);

    }



    if (
      timeLeft === 0 &&
      isRunning
    ) {

      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsRunning(false);


      addSession(
        duration
      );


      sendNotification({

        title:
          "Ambient Focus",

        body:
          "Focus session completed 🎉",

      });


      playCompletionSound();


      setShowCompletion(true);


      const toastTimer =
        setTimeout(() => {

          setShowCompletion(false);

        }, 4000);


      return () =>
        clearTimeout(toastTimer);

    }



    return () =>
      clearInterval(interval);


  }, [
    isRunning,
    timeLeft,
    duration,
    addSession,
    sendNotification,
  ]);




  const formatTime = useCallback(
(seconds) => {

  const mins =
    Math.floor(seconds / 60);


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




  const resetTimer = useCallback(() => {

  setIsRunning(false);

  setTimeLeft(duration);

}, [duration]);




  const selectPreset = useCallback(
(value) => {

    setIsRunning(false);

    setDuration(value);

    setTimeLeft(value);

  }, []);




  const applyCustomTime = useCallback(() => {

    const minutes =
      Number(customMinutes);


    if (
      !minutes ||
      minutes < 1
    )
      return;


    const seconds =
      minutes * 60;


    setDuration(seconds);

    setTimeLeft(seconds);

    setIsRunning(false);

  }, [customMinutes]);




  const radius = 120;


const circumference =
  useMemo(
    () => 2 * Math.PI * radius,
    []
  );


const offset =
  useMemo(() => {

    const progress =
      (
        (duration - timeLeft) /
        duration
      ) * 100;


    return (
      circumference -
      (progress / 100) *
      circumference
    );

  }, [
    duration,
    timeLeft,
    circumference,
  ]);
    return (

    <section
      className="mt-8"
    >

      <CompletionToast

        show={
          showCompletion
        }

        duration={
          duration
        }

        onClose={() =>
          setShowCompletion(false)
        }

      />



      <SectionTitle

        title="Focus Session"

        subtitle="Stay focused. One session at a time."

      />



      <Card
        className="
          max-w-5xl
          mx-auto
          relative
          overflow-hidden
        "
      >

        <div
          className="
            absolute
            inset-0
            bg-purple-500/5
            blur-3xl
          "
        />


        <div
          className="
            relative
            z-10
          "
        >


          <div
            className="
              flex
              justify-center
            "
          >

            <div
              className="
                relative
              "
            >

              <svg

                className="
                  w-57.5
                  h-57.5
                  sm:w-75
                  sm:h-75
                  transition-transform
                  duration-500
                "

                viewBox="
                  0 0 300 300
                "

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

                  className="
                    transition-all
                    duration-700
                    ease-linear
                  "

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
                  flex-col
                  items-center
                  justify-center
                "

              >

                <span

                  className="
                    text-5xl
                    sm:text-6xl
                    font-bold
                    theme-text
                    transition-colors
                    duration-300
                  "

                >

                  {
                    formatTime(
                      timeLeft
                    )
                  }

                </span>



                <span

                  className="
                    theme-text-muted
                    mt-2
                    transition-colors
                    duration-300
                  "

                >

                  Remaining

                </span>


              </div>


            </div>


          </div>





          <div

            className="
              flex
              justify-center
              gap-3
              mt-8
              flex-wrap
            "

          >

            <Button

              variant="secondary"

              onClick={() =>
                selectPreset(
                  TWENTY_FIVE
                )
              }

            >

              25 min

            </Button>



            <Button

              variant="secondary"

              onClick={() =>
                selectPreset(
                  FIFTY
                )
              }

            >

              50 min

            </Button>


          </div>





          <div

            className="
              flex
              flex-col
              sm:flex-row
              justify-center
              gap-3
              mt-6
            "

          >

            <input

              type="number"

              min="1"

              placeholder="Custom minutes"

              aria-label="Custom focus duration in minutes"


              className="
                w-full
                sm:w-auto

                theme-input

                rounded-xl

                px-4
                py-3

                outline-none

                transition-all
                duration-300

                focus:ring-2
                focus:ring-purple-500/50

                focus:scale-[1.02]

                hover:bg-black/10
                dark:hover:bg-white/15
              "


              value={
                customMinutes
              }


              onChange={(e) =>
                setCustomMinutes(
                  e.target.value
                )
              }

            />



            <Button

              onClick={
                applyCustomTime
              }

            >

              Apply

            </Button>


          </div>





          <div

            className="
              flex
              justify-center
              gap-4
              mt-8
              flex-wrap
            "

          >

            <Button

              onClick={() =>
                setIsRunning(
                  !isRunning
                )
              }

              aria-label={
                isRunning
                  ? "Pause focus timer"
                  : "Start focus timer"
              }

            >

              {
                isRunning ? (

                  <>

                    <Pause
                      size={18}
                    />

                    Pause

                  </>

                ) : (

                  <>

                    <Play
                      size={18}
                    />

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

              aria-label="Reset focus timer"

            >

              <RotateCcw
                size={18}
              />

              Reset


            </Button>


          </div>


        </div>


      </Card>


    </section>

  );

}


export default FocusTimer;