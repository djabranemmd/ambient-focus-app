import {
  Moon,
  Sun,
} from "lucide-react";


import {
  useTheme,
} from "../../context/ThemeContext.jsx";



function TopBar() {


  const {
    theme,
    toggleTheme,
  } = useTheme();




  const hour =
    new Date().getHours();



  let greeting =
    "Hello";



  if (hour < 12)

    greeting =
      "Good Morning";


  else if (hour < 18)

    greeting =
      "Good Afternoon";


  else

    greeting =
      "Good Evening";




  const nextTheme =
    theme === "dark"
      ? "light"
      : "dark";




  return (

    <div
      className="
        flex
        items-center
        justify-between
        mb-8
      "
    >



      <div>


        <h1
          className="
            text-4xl
            font-bold
            theme-text
            transition-colors
            duration-300
          "
        >

          {greeting} 👋

        </h1>




        <p
          className="
            theme-text-muted
            mt-2
            transition-colors
            duration-300
          "
        >

          Stay focused and reach your
          goals today.

        </p>


      </div>







      <button


        onClick={toggleTheme}



        aria-label={
          `Switch to ${nextTheme} mode`
        }



        aria-pressed={
          theme === "dark"
        }



        title={
          `Switch to ${nextTheme} mode`
        }



        className="
          h-12
          w-12

          rounded-xl

          theme-bg

          theme-border

          border

          theme-text


          flex

          items-center

          justify-center


          transition-all

          duration-300


          hover:scale-105


          active:scale-95



          focus:outline-none

          focus-visible:ring-2

          focus-visible:ring-purple-500/70

          focus-visible:ring-offset-2

        "

      >


        {
          theme === "dark"

          ?

          (

            <Sun

              size={20}

              aria-hidden="true"

            />

          )

          :

          (

            <Moon

              size={20}

              aria-hidden="true"

            />

          )

        }


      </button>




    </div>

  );

}



export default TopBar;