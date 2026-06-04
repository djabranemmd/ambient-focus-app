import { useState } from "react";

import FocusTimer from "./FocusTimer";
import PomodoroTimer from "./PomodoroTimer";
import TimerTabs from "./TimerTabs";

function TimerSection() {
  const [mode, setMode] =
    useState("focus");

  return (
    <>
      <TimerTabs
        mode={mode}
        setMode={setMode}
      />

      {mode === "focus" ? (
        <FocusTimer />
      ) : (
        <PomodoroTimer />
      )}
    </>
  );
}

export default TimerSection;