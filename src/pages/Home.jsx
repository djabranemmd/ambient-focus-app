import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";


import AuroraBackground from "../components/layout/AuroraBackground";
import DashboardLayout from "../components/layout/DashboardLayout";
import TopBar from "../components/layout/TopBar";

import TimerSection from "../components/timer/TimerSection";
import Statistics from "../components/stats/Statistics";
import DashboardExtras from "../components/stats/DashboardExtras";
import AudioMixer from "../components/audio/AudioMixer";
import DashboardHero from "../components/dashboard/DashboardHero";
import QuickStart from "../components/dashboard/QuickStart";
import FocusOverview from "../components/dashboard/FocusOverview";
import TodayProgress from "../components/dashboard/TodayProgress";
import ProductivityCard from "../components/dashboard/ProductivityCard";

import {
  useNavigation,
} from "../context/NavigationContext.jsx";



function Home() {


  const {
    activePage,
  } = useNavigation();



  const reduceMotion =
    useReducedMotion();





  const renderContent = () => {


    switch (activePage) {


      case "focus":

        return (
          <TimerSection />
        );



      case "sounds":

        return (
          <AudioMixer />
        );



      case "statistics":

        return (

          <>

            <Statistics />

            <DashboardExtras />

          </>

        );



      case "dashboard":

// eslint-disable-next-line no-fallthrough
default:

  return (

    <>

      <DashboardHero />

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-6
          mt-8
        "
      >

        <QuickStart />

        <FocusOverview />

        <TodayProgress />

        <ProductivityCard />

      </div>

    </>

  );


    }

  };







  return (

    <>


      <AuroraBackground />



      <DashboardLayout>



        <main

          id="main-content"

          aria-label="Ambient Focus dashboard"

          className="
            w-full

            max-w-7xl

            mx-auto

            overflow-hidden

            p-4

            sm:p-6

            lg:p-10
          "

        >



          <TopBar />





          <AnimatePresence

            mode="wait"

          >



            <motion.div


              key={activePage}


              role="region"


              aria-live="polite"


              aria-label={`${activePage} section`}



              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 15,
                    }
              }



              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }



              exit={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 0,
                      y: -10,
                    }
              }



              transition={

                reduceMotion

                  ? {
                      duration: 0,
                    }

                  :

                    {
                      duration: 0.3,
                      ease: "easeOut",
                    }

              }



            >

              {
                renderContent()
              }



            </motion.div>



          </AnimatePresence>



        </main>



      </DashboardLayout>



    </>

  );

}


export default Home;