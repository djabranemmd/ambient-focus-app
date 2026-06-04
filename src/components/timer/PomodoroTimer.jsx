import { useEffect, useState } from "react";
import {
  Play,
  Pause,
  RotateCcw,
} from "lucide-react";

import Card from "../ui/Card";
import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";

const FOCUS_TIME = 25 * 60;
const SHORT_BREAK = 5 * 60;
const LONG_BREAK = 15 * 60;

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

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsRunning(false);

      if (mode === "focus") {
        if (sessionCount === 4) {
          setMode("longBreak");
          setTimeLeft(LONG_BREAK);
          setSessionCount(1);
        } else {
          setMode("shortBreak");
          setTimeLeft(SHORT_BREAK);
        }
      } else {
        setMode("focus");
        setTimeLeft(FOCUS_TIME);

        if (
          mode === "shortBreak"
        ) {
          setSessionCount(
            (prev) => prev + 1
          );
        }
      }
    }

    return () =>
      clearInterval(interval);
  }, [
    isRunning,
    timeLeft,
    mode,
    sessionCount,
  ]);

  const resetTimer = () => {
    setIsRunning(false);
    setMode("focus");
    setSessionCount(1);
    setTimeLeft(FOCUS_TIME);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(
      seconds / 60
    );

    const secs = seconds % 60;

    return `${String(mins).padStart(
      2,
      "0"
    )}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  const radius = 120;

  const currentDuration =
    mode === "focus"
      ? FOCUS_TIME
      : mode === "shortBreak"
      ? SHORT_BREAK
      : LONG_BREAK;

  const progress =
    ((currentDuration -
      timeLeft) /
      currentDuration) *
    100;

  const circumference =
    2 * Math.PI * radius;

  const offset =
    circumference -
    (progress / 100) *
      circumference;

  const modeLabel = {
    focus: "Focus",
    shortBreak: "Short Break",
    longBreak: "Long Break",
  };

  return (
    <section className="mt-8">
      <SectionTitle
        title="Pomodoro Mode"
        subtitle="Work smarter with structured focus sessions."
      />

      <Card className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-purple-400 font-semibold">
            {modeLabel[mode]}
          </p>

          <p className="text-gray-400 mt-2">
            Session {sessionCount} / 4
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <svg
              width="300"
              height="300"
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
                transform="rotate(-90 150 150)"
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
              {formatTime(timeLeft)}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Button
            onClick={() =>
              setIsRunning(
                !isRunning
              )
            }
          >
            {isRunning ? (
              <>
                <Pause size={18} />
                Pause
              </>
            ) : (
              <>
                <Play size={18} />
                Start
              </>
            )}
          </Button>

          <Button
            variant="secondary"
            onClick={resetTimer}
          >
            <RotateCcw size={18} />
            Reset
          </Button>
        </div>
      </Card>
    </section>
  );
}

export default PomodoroTimer;