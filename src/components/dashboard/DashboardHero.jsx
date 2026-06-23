import {
  Sparkles,
  Clock,
} from "lucide-react";

import Card from "../ui/Card";


function DashboardHero() {

  return (

    <Card
      className="
        relative
        overflow-hidden
        mb-8
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-purple-500/10
          blur-3xl
        "
      />


      <div
        className="
          relative
          z-10
        "
      >

        <div
          className="
            flex
            items-center
            gap-4
          "
        >

          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-purple-500/20
              flex
              items-center
              justify-center
            "
          >

            <Sparkles
              size={28}
              className="text-purple-400"
            />

          </div>




          <div>

            <h1
              className="
                text-3xl
                sm:text-4xl
                font-bold
                theme-text
              "
            >
              Ambient Focus
            </h1>


            <p
              className="
                theme-text-muted
                mt-2
              "
            >
              Focus better, relax deeper, and build productive habits.
            </p>

          </div>


        </div>





        <div
          className="
            flex
            items-center
            gap-2
            mt-6
            theme-text-muted
            text-sm
          "
        >

          <Clock size={16}/>

          <span>
            Your personal productivity dashboard.
          </span>


        </div>


      </div>


    </Card>

  );

}


export default DashboardHero;