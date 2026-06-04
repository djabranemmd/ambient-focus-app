import { useEffect, useState } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import { useFocus } from "../../context/FocusContext";

const TWENTY_FIVE = 25 * 60;
const FIFTY = 50 * 60;

function FocusTimer() {
  const { addSession } = useFocus();

  const [duration, setDuration] = useState(TWENTY_FIVE);
  const [timeLeft, setTimeLeft] = useState(TWENTY_FIVE);
  const [isRunning, setIsRunning] = useState(false);

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

      alert("Focus session completed 🎉");
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, duration, addSession]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${String(mins).padStart(2, "0")}:${String(
      secs
    ).padStart(2, "0")}`;
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

  const progress =
    ((duration - timeLeft) / duration) * 100;

  const circumference = 2 * Math.PI * 110;

  return (
    <section className="max-w-6xl mx-auto px-6 mt-20">
      <div
        className="
        max-w-4xl
    mx-auto
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-[40px]
          p-10
          text-center
        "
      >
        <h2 className="text-3xl font-bold">
          Focus Timer
        </h2>

        <p className="text-gray-400 mt-2">
          Stay focused and track your sessions.
        </p>

        <div className="mt-8 flex justify-center">
          <div className="relative">
            <svg width="260" height="260">
              <circle
                cx="130"
                cy="130"
                r="110"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="12"
                fill="none"
              />

              <circle
                cx="130"
                cy="130"
                r="110"
                stroke="#8b5cf6"
                strokeWidth="12"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={
                  circumference -
                  (circumference * progress) / 100
                }
                transform="rotate(-90 130 130)"
                strokeLinecap="round"
              />
            </svg>

            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                text-5xl
                font-bold
              "
            >
              {formatTime(timeLeft)}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() =>
              setIsRunning(!isRunning)
            }
            className="
              flex
              items-center
              gap-2
              bg-purple-600
              hover:bg-purple-500
              px-6
              py-3
              rounded-xl
              transition
            "
          >
            {isRunning ? (
              <Pause size={18} />
            ) : (
              <Play size={18} />
            )}

            {isRunning ? "Pause" : "Start"}
          </button>

          <button
            onClick={resetTimer}
            className="
              flex
              items-center
              gap-2
              bg-white/10
              hover:bg-white/15
              px-6
              py-3
              rounded-xl
              transition
            "
          >
            <RotateCcw size={18} />
            Reset
          </button>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() =>
              selectPreset(TWENTY_FIVE)
            }
            className="
              bg-white/10
              hover:bg-white/15
              px-5
              py-2
              rounded-xl
              transition
            "
          >
            25 min
          </button>

          <button
            onClick={() =>
              selectPreset(FIFTY)
            }
            className="
              bg-white/10
              hover:bg-white/15
              px-5
              py-2
              rounded-xl
              transition
            "
          >
            50 min
          </button>
        </div>
      </div>
    </section>
  );
}

export default FocusTimer;