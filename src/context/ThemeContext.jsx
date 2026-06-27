import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const ThemeContext = createContext(null);

const STORAGE_KEY = "theme";
const DEFAULT_THEME = "dark";
const VALID_THEMES = Object.freeze(["dark", "light"]);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem(STORAGE_KEY);

      return VALID_THEMES.includes(savedTheme) ? savedTheme : DEFAULT_THEME;
    } catch (error) {
      console.error("Failed reading theme:", error);
      return DEFAULT_THEME;
    }
  });

  useEffect(() => {
    const root = document.documentElement;

    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;

    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      console.error("Failed saving theme:", error);
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  const changeTheme = useCallback((newTheme) => {
    if (VALID_THEMES.includes(newTheme)) {
      setTheme(newTheme);
    }
  }, []);

  const value = useMemo(
    () => ({
      theme,
      setTheme: changeTheme,
      toggleTheme,
      isDark: theme === "dark",
      isLight: theme === "light",
    }),
    [theme, toggleTheme, changeTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}