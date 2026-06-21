import {
  memo,
} from "react";

import DailyGoal from "./DailyGoal";
import SessionHistory from "./SessionHistory";



function DashboardExtras() {


  return (

    <section

      className="mt-10"

      aria-label="Additional dashboard information"

    >


      <div

        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
        "

      >


        <DailyGoal />


        <SessionHistory />


      </div>



    </section>

  );

}



export default memo(DashboardExtras);