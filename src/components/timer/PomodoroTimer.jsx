import { useCallback, useEffect, useMemo, useState } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import { useFocus } from "../../context/FocusContext";
import useNotification from "../../hooks/useNotification";
import { playCompletionSound } from "../../utils/sound";
import Card from "../ui/Card";
import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";
import CompletionToast from "../ui/CompletionToast";

const FOCUS_TIME = 25 * 60;
const SHORT_BREAK = 5 * 60;
const LONG_BREAK = 15 * 60;

const radius = 120;

const modeLabel = {
  focus: "Focus",
  shortBreak: "Short Break",
  longBreak: "Long Break",
};

function PomodoroTimer() {
  const { addSession } = useFocus();
  const { sendNotification } = useNotification();

  const [isRunning, setIsRunning] = useState(false);
  const [sessionCount, setSessionCount] = useState(1);
  const [mode, setMode] = useState("focus");
  const [timeLeft, setTimeLeft] = useState(FOCUS_TIME);
  const [showCompletion, setShowCompletion] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0 && isRunning) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsRunning(false);

      if (mode === "focus") {
        addSession(FOCUS_TIME);

        sendNotification({
          title: "Ambient Focus",
          body: "Pomodoro focus session completed 🎉",
        });

        playCompletionSound();

        setShowCompletion(true);

        setTimeout(() => {
          setShowCompletion(false);
        }, 4000);

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

        if (mode === "shortBreak") {
          setSessionCount((prev) => prev + 1);
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
    addSession,
    sendNotification,
  ]);

  const resetTimer = useCallback(() => {
    setIsRunning(false);
    setMode("focus");
    setSessionCount(1);
    setTimeLeft(FOCUS_TIME);
  }, []);

  const toggleTimer = useCallback(() => {
    setIsRunning((prev) => !prev);
  }, []);

  const formatTime = useCallback((seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }, []);

  const currentDuration = useMemo(() => {
    if (mode === "focus") return FOCUS_TIME;
    if (mode === "shortBreak") return SHORT_BREAK;
    return LONG_BREAK;
  }, [mode]);

  const circumference = useMemo(() => 2 * Math.PI * radius, []);

  const offset = useMemo(() => {
    const progress = ((currentDuration - timeLeft) / currentDuration) * 100;

    return circumference - (progress / 100) * circumference;
  }, [currentDuration, timeLeft, circumference]);

  return (
    <section className="mt-8">
      <CompletionToast
        show={showCompletion}
        duration={FOCUS_TIME}
        onClose={() => {
          setShowCompletion(false);
        }}
      />

      <SectionTitle
        title="Pomodoro Mode"
        subtitle="Work smarter with structured focus sessions."
      />

      <Card className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-purple-500 font-semibold">{modeLabel[mode]}</p>
          <p className="theme-text-muted mt-2">Session {sessionCount} / 4</p>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <svg width="300" height="300" aria-hidden="true">
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
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                transform="rotate(-90 150 150)"
              />
            </svg>

            <div
              role="timer"
              aria-live="polite"
              aria-label={`${formatTime(timeLeft)} ${modeLabel[mode]} timer`}
              className="absolute inset-0 flex items-center justify-center text-6xl font-bold theme-text"
            >
              {formatTime(timeLeft)}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Button
            type="button"
            onClick={toggleTimer}
            aria-pressed={isRunning}
            aria-label={
              isRunning ? "Pause Pomodoro timer" : "Start Pomodoro timer"
            }
          >
            {isRunning ? (
              <>
                <Pause size={18} aria-hidden="true" />
                Pause
              </>
            ) : (
              <>
                <Play size={18} aria-hidden="true" />
                Start
              </>
            )}
          </Button>

          <Button
            type="button"
            variant="secondary"
            onClick={resetTimer}
            aria-label="Reset Pomodoro timer"
          >
            <RotateCcw size={18} aria-hidden="true" />
            Reset
          </Button>
        </div>
      </Card>
    </section>
  );
}

export default PomodoroTimer;