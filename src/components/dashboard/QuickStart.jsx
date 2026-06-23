import {
  Play,
  Music,
  Timer,
} from "lucide-react";

import Card from "../ui/Card";


function QuickStart() {


  const steps = [
    {
      icon: Timer,
      title: "Start Focus",
      description:
        "Choose a timer and begin your focus session.",
    },

    {
      icon: Music,
      title: "Add Sounds",
      description:
        "Mix ambient sounds to improve concentration.",
    },

    {
      icon: Play,
      title: "Stay Consistent",
      description:
        "Build your productivity habit every day.",
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

        Quick Start

      </h3>




      <div

        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-5
        "

      >


        {
          steps.map((step) => {


            const Icon =
              step.icon;



            return (

              <div

                key={step.title}

                className="
                  rounded-2xl
                  p-4
                  bg-black/5
                  dark:bg-white/5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "

              >


                <div

                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-purple-500/20
                    flex
                    items-center
                    justify-center
                    mb-4
                  "

                >

                  <Icon
                    size={22}
                    className="
                      text-purple-400
                    "
                  />

                </div>



                <h4

                  className="
                    font-semibold
                    theme-text
                  "

                >

                  {step.title}

                </h4>




                <p

                  className="
                    text-sm
                    theme-text-muted
                    mt-2
                    leading-relaxed
                  "

                >

                  {step.description}

                </p>



              </div>

            );

          })
        }



      </div>



    </Card>

  );

}



export default QuickStart;