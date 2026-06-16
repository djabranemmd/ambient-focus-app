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
        "
      >
        {value}
      </h3>



      {subtitle && (

        <p
          className="
            theme-text-muted
            mt-2
            text-sm
          "
        >
          {subtitle}
        </p>

      )}


    </Card>

  );

}


export default memo(StatsCard);