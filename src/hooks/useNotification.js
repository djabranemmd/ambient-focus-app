import {
  useCallback,
  useState,
} from "react";





function useNotification() {



  const isSupported =

    typeof window !== "undefined" &&

    "Notification" in window;







  const [permission, setPermission] =

    useState(() => {


      if (!isSupported) {

        return "unsupported";

      }


      return Notification.permission;


    });










  const requestPermission =

    useCallback(

      async () => {



        if (!isSupported) {


          console.warn(
            "Browser notifications are not supported."
          );


          return false;


        }






        try {



          const result =

            await Notification.requestPermission();




          setPermission(
            result
          );




          return (
            result === "granted"
          );




        } catch(error) {



          console.error(

            "Notification permission request failed:",

            error

          );



          return false;



        }



      },

      [
        isSupported,
      ]

    );









  const sendNotification =

    useCallback(

      ({
        title,

        body,

        timeout = 5000,

      }) => {



        if(!isSupported) {


          console.warn(
            "Notifications are unavailable."
          );


          return false;


        }






        if(
          permission !== "granted"
        ) {


          return false;


        }






        if(
          !title
        ) {


          console.warn(
            "Notification title is required."
          );


          return false;


        }






        try {



          const notification =

            new Notification(

              title,

              {

                body:
                  body ?? "",



                icon:
                  "/favicon.ico",



                badge:
                  "/favicon.ico",

              }

            );







          if(timeout > 0) {


            setTimeout(

              () => {

                notification.close();

              },

              timeout

            );


          }







          return true;




        } catch(error) {



          console.error(

            "Failed creating notification:",

            error

          );



          return false;



        }




      },

      [

        isSupported,

        permission,

      ]

    );









  return {


    isSupported,


    permission,


    requestPermission,


    sendNotification,


  };

}



export default useNotification;