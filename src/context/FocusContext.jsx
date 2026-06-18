import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";


const FocusContext =
  createContext(null);



const STORAGE_KEY =
  "focusSessions";



export function FocusProvider({
  children,
}) {



  const [sessions, setSessions] =
    useState([]);




  useEffect(() => {


    try {


      const saved =
        localStorage.getItem(
          STORAGE_KEY
        );



      if (!saved) {

        return;

      }



      const parsed =
        JSON.parse(saved);



      if (
        Array.isArray(parsed)
      ) {


        setSessions(
          parsed.filter(
            (session) =>
              typeof session.duration === "number" &&
              session.date
          )
        );


      }



    } catch (error) {


      console.error(
        "Failed loading focus sessions:",
        error
      );


      localStorage.removeItem(
        STORAGE_KEY
      );


    }



  }, []);







  const addSession = (
    duration
  ) => {



    if (
      typeof duration !== "number" ||
      duration <= 0
    ) {

      console.warn(
        "Invalid session duration"
      );

      return;

    }






    const newSession = {

      id:
        crypto.randomUUID
          ? crypto.randomUUID()
          : Date.now(),


      duration,


      date:
        new Date().toISOString(),

    };






    setSessions((prev) => {


      const updated = [

        ...prev,

        newSession,

      ];



      try {


        localStorage.setItem(

          STORAGE_KEY,

          JSON.stringify(updated)

        );


      } catch (error) {


        console.error(

          "Failed saving focus session:",

          error

        );


      }



      return updated;


    });



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


  const context =
    useContext(
      FocusContext
    );



  if (!context) {


    throw new Error(

      "useFocus must be used inside FocusProvider"

    );


  }



  return context;


}