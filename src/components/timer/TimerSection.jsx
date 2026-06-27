import { useCallback, useState } from "react";
import FocusTimer from "./FocusTimer";
import PomodoroTimer from "./PomodoroTimer";
import TimerTabs from "./TimerTabs";

// eslint-disable-next-line react-refresh/only-export-components
export const TIMER_MODES = {
  FOCUS: "focus",
  POMODORO: "pomodoro",
};

function TimerSection() {
  const [mode, setMode] = useState(TIMER_MODES.FOCUS);

  const handleModeChange = useCallback((newMode) => {
    if (Object.values(TIMER_MODES).includes(newMode)) {
      setMode(newMode);
    }
  }, []);

  const renderTimer = () => {
    switch (mode) {
      case TIMER_MODES.POMODORO:
        return <PomodoroTimer />;

      case TIMER_MODES.FOCUS:
      default:
        return <FocusTimer />;
    }
  };

  return (
    <section aria-label="Focus timer section">
      <TimerTabs mode={mode} setMode={handleModeChange} />
      {renderTimer()}
    </section>
  );
}

export default TimerSection;