import {
  memo,
} from "react";

import Card from "../ui/Card";



function StatsCard({
  title,
  value,
  subtitle,
}) {


  return (

    <article
      aria-label={`${title}: ${value}`}
    >


      <Card>


        <p

          className="
            theme-text-muted
            text-sm
          "

        >

          {title}


        </p>





        <h3

          className="
            text-3xl
            font-bold
            mt-2
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



      </Card>



    </article>

  );

}


export default memo(StatsCard);