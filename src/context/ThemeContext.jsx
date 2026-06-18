import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";



const ThemeContext =
  createContext(null);



const STORAGE_KEY =
  "theme";



const DEFAULT_THEME =
  "dark";



const VALID_THEMES = [
  "dark",
  "light",
];




export function ThemeProvider({
  children,
}) {



  const [theme, setTheme] =
    useState(() => {


      try {


        const savedTheme =
          localStorage.getItem(
            STORAGE_KEY
          );



        return VALID_THEMES.includes(
          savedTheme
        )
          ? savedTheme
          : DEFAULT_THEME;



      } catch (error) {


        console.error(
          "Failed reading theme:",
          error
        );


        return DEFAULT_THEME;


      }


    });







  useEffect(() => {


    document.documentElement
      .setAttribute(
        "data-theme",
        theme
      );



    try {


      localStorage.setItem(

        STORAGE_KEY,

        theme

      );


    } catch (error) {


      console.error(

        "Failed saving theme:",

        error

      );


    }



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


  const context =
    useContext(
      ThemeContext
    );



  if (!context) {


    throw new Error(

      "useTheme must be used inside ThemeProvider"

    );


  }



  return context;


}