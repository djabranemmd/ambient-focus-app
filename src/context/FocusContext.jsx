import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
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




  /*
    Load sessions once
  */

  useEffect(() => {


    try {


      const saved =
        localStorage.getItem(
          STORAGE_KEY
        );



      if (!saved)
        return;




      const parsed =
        JSON.parse(saved);




      if (
        Array.isArray(parsed)
      ) {


        const validSessions =
          parsed.filter(
            (session) =>
              typeof session.duration === "number" &&
              session.duration > 0 &&
              session.date
          );



        setSessions(
          validSessions
        );


      }



    } catch(error) {


      console.error(
        "Failed loading focus sessions:",
        error
      );


      localStorage.removeItem(
        STORAGE_KEY
      );


    }



  }, []);








  /*
    Save sessions when changed
  */


  useEffect(() => {


    try {


      localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(
          sessions
        )

      );


    } catch(error) {


      console.error(
        "Failed saving focus sessions:",
        error
      );


    }



  }, [sessions]);










  const addSession =
    useCallback(
      (
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
            new Date()
              .toISOString(),


        };





        setSessions(
          (prev) => [

            ...prev,

            newSession,

          ]
        );



      },
      []
    );










  const value =
    useMemo(
      () => ({

        sessions,

        addSession,

      }),

      [
        sessions,
        addSession,
      ]

    );








  return (

    <FocusContext.Provider

      value={
        value
      }

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