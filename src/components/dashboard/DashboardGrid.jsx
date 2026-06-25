import {
  memo,
} from "react";

import DashboardHero from "./DashboardHero";
import FocusOverview from "./FocusOverview";
import TodayProgress from "./TodayProgress";
import ProductivityCard from "./ProductivityCard";
import QuickStart from "./QuickStart";
import DashboardHeader from "./DashboardHeader";


function DashboardGrid() {


  return (

    <section

      className="
        mt-8
        space-y-6
      "

      aria-label="Dashboard overview"

    >


<DashboardHeader />
      <DashboardHero />




      <div

        className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-6
        "

      >


        <FocusOverview />


        <TodayProgress />


      </div>





      <ProductivityCard />





      <QuickStart />



    </section>

  );

}



export default memo(DashboardGrid);