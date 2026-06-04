import Button from "../ui/Button";

function TimerTabs({
  mode,
  setMode,
}) {
  return (
    <div className="flex justify-center mb-8">
      <div className="bg-white/5 p-2 rounded-2xl flex gap-2">
        <Button
          variant={
            mode === "focus"
              ? "primary"
              : "secondary"
          }
          onClick={() =>
            setMode("focus")
          }
        >
          Focus
        </Button>

        <Button
          variant={
            mode === "pomodoro"
              ? "primary"
              : "secondary"
          }
          onClick={() =>
            setMode("pomodoro")
          }
        >
          Pomodoro
        </Button>
      </div>
    </div>
  );
}

export default TimerTabs;