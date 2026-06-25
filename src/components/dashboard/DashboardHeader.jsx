import {
  memo,
} from "react";

import {
  CalendarDays,
  Sparkles,
} from "lucide-react";

import Card from "../ui/Card";



function DashboardHeader() {


  const today =
    new Date().toLocaleDateString(
      undefined,
      {
        weekday: "long",
        month: "long",
        day: "numeric",
      }
    );



  return (

    <Card>


      <div

        className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-5
        "

      >


        <div>


          <div

            className="
              flex
              items-center
              gap-2
            "

          >

            <Sparkles

              size={22}

              className="
                text-purple-400
              "

            />


            <h1

              className="
                text-3xl
                font-bold
                theme-text
              "

            >

              Welcome Back

            </h1>


          </div>




          <p

            className="
              theme-text-muted
              mt-2
            "

          >

            Ready for another productive session?

          </p>


        </div>






        <div

          className="
            flex
            items-center
            gap-3
            rounded-2xl
            bg-black/5
            dark:bg-white/5
            px-4
            py-3
          "

        >

          <CalendarDays

            size={20}

            className="
              text-purple-400
            "

          />


          <span

            className="
              text-sm
              theme-text
            "

          >

            {today}

          </span>


        </div>



      </div>



    </Card>

  );

}



export default memo(DashboardHeader);