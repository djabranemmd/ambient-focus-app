import {
  memo,
} from "react";


import Card from "../ui/Card";




function StatsCard({

  title,

  value,

  subtitle,

  icon: Icon,

}) {



  return (


    <Card>



      <div

        aria-label={`${title}: ${value}`}

      >





        <div

          className="
            flex
            items-center
            justify-between
            gap-4
          "

        >



          <p

            className="
              theme-text-muted

              text-sm

              transition-colors

              duration-300
            "

          >

            {title}


          </p>





          {
            Icon && (

              <div

                className="
                  h-10
                  w-10

                  rounded-2xl

                  bg-purple-500/10

                  flex

                  items-center

                  justify-center

                  text-purple-500
                "

              >

                <Icon
                  size={20}
                />

              </div>

            )
          }



        </div>








        <h3

          className="
            text-3xl

            font-bold

            mt-3


            theme-text


            transition-colors

            duration-300
          "

        >

          {value}


        </h3>








        {
          subtitle && (


            <p

              className="
                theme-text-muted

                mt-2

                text-sm

                transition-colors

                duration-300
              "

            >

              {subtitle}


            </p>


          )
        }





      </div>




    </Card>


  );

}




export default memo(StatsCard);