import { useState } from "react";


function useNotification() {


  const isSupported =
    "Notification" in window;



  const [permission, setPermission] =
    useState(
      isSupported
        ? Notification.permission
        : "unsupported"
    );




  const requestPermission =
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


      } catch (error) {


        console.error(
          "Notification permission error:",
          error
        );


        return false;

      }


    };







  const sendNotification = ({
    title,
    body,
  }) => {


    if (!isSupported) {

      console.warn(
        "Notifications unavailable."
      );

      return false;

    }




    if (
      Notification.permission !==
      "granted"
    ) {

      return false;

    }




    try {


      new Notification(
        title,
        {
          body,

          icon:
            "/favicon.ico",

          badge:
            "/favicon.ico",
        }
      );



      return true;



    } catch (error) {


      console.error(
        "Notification failed:",
        error
      );


      return false;


    }


  };






  return {

    permission,

    requestPermission,

    sendNotification,

  };

}


export default useNotification;