import { useState } from "react";


function useNotification() {

  const [permission, setPermission] =
    useState(
      Notification.permission
    );


  const requestPermission = async () => {

    if (
      !("Notification" in window)
    ) {
      return false;
    }


    const result =
      await Notification.requestPermission();


    setPermission(result);


    return result === "granted";
  };



  const sendNotification = ({
    title,
    body,
  }) => {


    if (
      Notification.permission ===
      "granted"
    ) {

      new Notification(
        title,
        {
          body,
          icon: "/favicon.ico",
        }
      );

      return true;
    }


    return false;

  };


  return {
    permission,
    requestPermission,
    sendNotification,
  };

}


export default useNotification;