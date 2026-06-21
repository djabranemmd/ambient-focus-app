import {
  useCallback,
  useState,
} from "react";

import FocusTimer from "./FocusTimer";
import PomodoroTimer from "./PomodoroTimer";
import TimerTabs from "./TimerTabs";


function TimerSection() {


  const [mode, setMode] =
    useState("focus");



  const handleModeChange =
    useCallback((newMode) => {

      setMode(newMode);

    }, []);




  return (

    <>

      <TimerTabs

        mode={mode}

        setMode={
          handleModeChange
        }

      />



      {
        mode === "focus"

          ?

          <FocusTimer />

          :

          <PomodoroTimer />

      }


    </>

  );

}


export default TimerSection;