import {
  createContext,
  useContext,
  useState,
} from "react";



const NavigationContext =
  createContext(null);




export const PAGES = {

  DASHBOARD:
    "dashboard",

  FOCUS:
    "focus",

  SOUNDS:
    "sounds",

  STATISTICS:
    "statistics",

};




const VALID_PAGES =
  Object.values(PAGES);






export function NavigationProvider({
  children,
}) {



  const [activePage, setActivePageState] =
    useState(
      PAGES.DASHBOARD
    );






  const setActivePage = (
    page
  ) => {


    if (
      !VALID_PAGES.includes(page)
    ) {


      console.warn(

        `Invalid navigation page: ${page}`

      );


      return;

    }



    setActivePageState(page);


  };






  return (

    <NavigationContext.Provider


      value={{

        activePage,

        setActivePage,

      }}



    >


      {children}


    </NavigationContext.Provider>


  );

}
// eslint-disable-next-line react-refresh/only-export-components
export function useNavigation() {
  const context =
    useContext(
      NavigationContext
    );



  if (!context) {


    throw new Error(

      "useNavigation must be used inside NavigationProvider"

    );


  }



  return context;


}