import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const FocusContext =
  createContext();

export function FocusProvider({
  children,
}) {
  const [sessions, setSessions] =
    useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(
        localStorage.getItem(
          "focusSessions"
        )
      ) || [];

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSessions(saved);
  }, []);

  const addSession = (
    duration
  ) => {
    const newSession = {
      duration,
      date:
        new Date().toISOString(),
    };

    const updated = [
      ...sessions,
      newSession,
    ];

    setSessions(updated);

    localStorage.setItem(
      "focusSessions",
      JSON.stringify(updated)
    );
  };

  return (
    <FocusContext.Provider
      value={{
        sessions,
        addSession,
      }}
    >
      {children}
    </FocusContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFocus() {
  return useContext(
    FocusContext
  );
}