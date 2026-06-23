import {
  memo,
} from "react";

import {
  TrendingUp,
  Clock,
  Zap,
} from "lucide-react";

import {
  useFocus,
} from "../../context/FocusContext";

import Card from "../ui/Card";




function ProductivityCard() {


  const {
    sessions,
  } = useFocus();




  const totalMinutes =
    sessions.reduce(
      (total, session) =>
        total + session.duration / 60,
      0
    );




  const totalHours =
    Math.floor(
      totalMinutes / 60
    );




  const averageSession =
    sessions.length > 0
      ? Math.round(
          totalMinutes / sessions.length
        )
      : 0;




  const stats = [

    {
      icon: Clock,
      label: "Total Focus",
      value:
        `${totalHours}h ${Math.floor(totalMinutes % 60)}m`,
    },


    {
      icon: Zap,
      label: "Sessions",
      value:
        sessions.length,
    },


    {
      icon: TrendingUp,
      label: "Average",
      value:
        `${averageSession} min`,
    },

  ];





  return (

    <Card>


      <div

        className="
          flex
          items-center
          justify-between
          mb-6
        "

      >


        <div>

          <h3

            className="
              text-xl
              font-semibold
              theme-text
            "

          >

            Productivity

          </h3>



          <p

            className="
              text-sm
              theme-text-muted
              mt-1
            "

          >

            Your focus performance overview.

          </p>


        </div>



        <div

          className="
            w-12
            h-12
            rounded-2xl
            bg-purple-500/20
            flex
            items-center
            justify-center
          "

        >

          <TrendingUp

            size={24}

            className="
              text-purple-400
            "

          />

        </div>



      </div>






      <div

        className="
          grid
          grid-cols-1
          sm:grid-cols-3
          gap-4
        "

      >

        {
          stats.map((item) => {


            const Icon =
              item.icon;



            return (

              <div

                key={item.label}

                className="
                  rounded-2xl
                  bg-black/5
                  dark:bg-white/5
                  p-4
                "

              >


                <Icon

                  size={20}

                  className="
                    text-purple-400
                  "

                />



                <p

                  className="
                    text-xs
                    theme-text-muted
                    mt-3
                  "

                >

                  {item.label}

                </p>




                <p

                  className="
                    text-2xl
                    font-bold
                    theme-text
                    mt-1
                  "

                >

                  {item.value}

                </p>



              </div>

            );


          })
        }


      </div>



    </Card>

  );

}



export default memo(ProductivityCard);