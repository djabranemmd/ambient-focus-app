import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const FocusContext = createContext(null);

const STORAGE_KEY = "focusSessions";
const MAX_SESSIONS = 500;

export function FocusProvider({ children }) {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (!saved) return;

      const parsed = JSON.parse(saved);

      if (Array.isArray(parsed)) {
        const validSessions = parsed
          .filter(
            (session) =>
              typeof session.duration === "number" &&
              session.duration > 0 &&
              session.date
          )
          .slice(-MAX_SESSIONS);

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSessions(validSessions);
      }
    } catch (error) {
      console.error("Failed loading focus sessions:", error);
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
    } catch (error) {
      console.error("Failed saving focus sessions:", error);
    }
  }, [sessions]);

  const addSession = useCallback((duration) => {
    if (typeof duration !== "number" || duration <= 0) {
      console.warn("Invalid session duration");
      return;
    }

    const id =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : Date.now();

    const newSession = {
      id,
      duration,
      date: new Date().toISOString(),
    };

    setSessions((prev) => [...prev, newSession].slice(-MAX_SESSIONS));
  }, []);

  const removeSession = useCallback((id) => {
    setSessions((prev) => prev.filter((session) => session.id !== id));
  }, []);

  const clearSessions = useCallback(() => {
    setSessions([]);
  }, []);

  const value = useMemo(
    () => ({
      sessions,
      addSession,
      removeSession,
      clearSessions,
    }),
    [sessions, addSession, removeSession, clearSessions]
  );

  return (
    <FocusContext.Provider value={value}>{children}</FocusContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFocus() {
  const context = useContext(FocusContext);

  if (!context) {
    throw new Error("useFocus must be used inside FocusProvider");
  }

  return context;
}