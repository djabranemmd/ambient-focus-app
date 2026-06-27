import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const NavigationContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const PAGES = Object.freeze({
  DASHBOARD: "dashboard",
  FOCUS: "focus",
  SOUNDS: "sounds",
  STATISTICS: "statistics",
});

const VALID_PAGES = Object.values(PAGES);

export function NavigationProvider({ children }) {
  const [activePage, setActivePageState] = useState(PAGES.DASHBOARD);
  const [previousPage, setPreviousPage] = useState(null);

  const setActivePage = useCallback((page) => {
    if (!VALID_PAGES.includes(page)) {
      console.warn(`Invalid navigation page: ${page}`);
      return;
    }

    setActivePageState((currentPage) => {
      if (currentPage !== page) {
        setPreviousPage(currentPage);
      }

      return page;
    });
  }, []);

  const goBack = useCallback(() => {
    if (previousPage) {
      setActivePageState(previousPage);
      setPreviousPage(null);
    }
  }, [previousPage]);

  const resetNavigation = useCallback(() => {
    setActivePageState(PAGES.DASHBOARD);
    setPreviousPage(null);
  }, []);

  const value = useMemo(
    () => ({
      activePage,
      previousPage,
      setActivePage,
      goBack,
      resetNavigation,
      pages: PAGES,
    }),
    [activePage, previousPage, setActivePage, goBack, resetNavigation]
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useNavigation() {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error("useNavigation must be used inside NavigationProvider");
  }

  return context;
}