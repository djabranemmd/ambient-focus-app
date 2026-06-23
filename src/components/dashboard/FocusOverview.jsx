import {
  Clock,
  Target,
  Flame,
} from "lucide-react";

import Card from "../ui/Card";


function FocusOverview() {


  const items = [
    {
      icon: Clock,
      title: "Focus Time",
      value: "0 min",
    },

    {
      icon: Target,
      title: "Sessions",
      value: "0",
    },

    {
      icon: Flame,
      title: "Streak",
      value: "0 days",
    },
  ];



  return (

    <Card>

      <h3
        className="
          text-xl
          font-semibold
          theme-text
          mb-6
        "
      >
        Focus Overview
      </h3>



      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-3
          gap-4
        "
      >

        {
          items.map((item) => {

            const Icon = item.icon;


            return (

              <div

                key={item.title}

                className="
                  rounded-2xl
                  bg-black/5
                  dark:bg-white/5
                  p-4
                "

              >

                <Icon
                  size={22}
                  className="
                    text-purple-400
                  "
                />


                <p
                  className="
                    theme-text-muted
                    text-sm
                    mt-3
                  "
                >
                  {item.title}
                </p>


                <p
                  className="
                    theme-text
                    text-2xl
                    font-bold
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


export default FocusOverview;