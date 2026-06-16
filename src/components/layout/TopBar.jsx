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

        aria-label="Toggle theme"

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

          focus:outline-none
          focus:ring-2
          focus:ring-purple-500/50
        "

      >

        {
          theme === "dark" ? (

            <Sun size={20} />

          ) : (

            <Moon size={20} />

          )
        }


      </button>


    </div>

  );

}


export default TopBar;