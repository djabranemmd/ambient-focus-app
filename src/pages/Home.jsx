import {
  AnimatePresence,
  motion,
} from "framer-motion";


import AuroraBackground from "../components/layout/AuroraBackground";
import DashboardLayout from "../components/layout/DashboardLayout";
import TopBar from "../components/layout/TopBar";

import TimerSection from "../components/timer/TimerSection";
import Statistics from "../components/stats/Statistics";
import DashboardExtras from "../components/stats/DashboardExtras";
import AudioMixer from "../components/audio/AudioMixer";


import {
  useNavigation,
} from "../context/NavigationContext.jsx";



function Home() {


  const {
    activePage,
  } = useNavigation();




  const renderContent = () => {


    switch(activePage) {


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

            <TimerSection />

            <Statistics />

            <DashboardExtras />

            <AudioMixer />

          </>

        );


    }

  };





  return (

    <>

      <AuroraBackground />



      <DashboardLayout>


        <main
          className="
            w-full
            max-w-full
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


              initial={{
                opacity: 0,
                y: 15,
              }}


              animate={{
                opacity: 1,
                y: 0,
              }}


              exit={{
                opacity: 0,
                y: -10,
              }}


              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}

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