import { useEffect, useState } from "react";
import {
  Play,
  Pause,
  RotateCcw,
} from "lucide-react";

import { useFocus } from "../../context/FocusContext";

import Card from "../ui/Card";
import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";

const TWENTY_FIVE = 25 * 60;
const FIFTY = 50 * 60;

function FocusTimer() {
  const { addSession } = useFocus();

  const [duration, setDuration] =
    useState(TWENTY_FIVE);

  const [timeLeft, setTimeLeft] =
    useState(TWENTY_FIVE);

  const [isRunning, setIsRunning] =
    useState(false);

  const [customMinutes, setCustomMinutes] =
    useState("");

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

      addSession(duration);

      alert(
        "Focus session completed 🎉"
      );
    }

    return () =>
      clearInterval(interval);
  }, [
    isRunning,
    timeLeft,
    duration,
    addSession,
  ]);

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

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(duration);
  };

  const selectPreset = (value) => {
    setIsRunning(false);

    setDuration(value);
    setTimeLeft(value);
  };

  const applyCustomTime = () => {
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
  };

  const progress =
    ((duration - timeLeft) /
      duration) *
    100;

  const radius = 120;

  const circumference =
    2 * Math.PI * radius;

  const offset =
    circumference -
    (progress / 100) *
      circumference;

  return (
    <section className="mt-8">
      <SectionTitle
        title="Focus Session"
        subtitle="Stay focused. One session at a time."
      />

      <Card className="max-w-5xl mx-auto relative overflow-hidden">
        <div
          className="
            absolute
            inset-0
            bg-purple-500/5
            blur-3xl
          "
        />

        <div className="relative z-10">
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
                  flex-col
                  items-center
                  justify-center
                "
              >
                <span className="text-6xl font-bold">
                  {formatTime(
                    timeLeft
                  )}
                </span>

                <span className="text-gray-400 mt-2">
                  Remaining
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8 flex-wrap">
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
                selectPreset(FIFTY)
              }
            >
              50 min
            </Button>
          </div>

          <div className="flex justify-center gap-3 mt-6 flex-wrap">
            <input
              type="number"
              placeholder="Custom minutes"
              value={
                customMinutes
              }
              onChange={(e) =>
                setCustomMinutes(
                  e.target.value
                )
              }
              className="
                bg-white/10
                border
                border-white/10
                rounded-xl
                px-4
                py-3
                outline-none
              "
            />

            <Button
              onClick={
                applyCustomTime
              }
            >
              Apply
            </Button>
          </div>

          <div className="flex justify-center gap-4 mt-8 flex-wrap">
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
              onClick={
                resetTimer
              }
            >
              <RotateCcw size={18} />
              Reset
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
}

export default FocusTimer;