import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext =
  createContext();

export function ThemeProvider({
  children,
}) {
  const [theme, setTheme] =
    useState("dark");

  useEffect(() => {
    const savedTheme =
      localStorage.getItem(
        "theme"
      );

    if (savedTheme) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme
    );

    localStorage.setItem(
      "theme",
      theme
    );
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "dark"
        ? "light"
        : "dark"
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  return useContext(
    ThemeContext
  );
}