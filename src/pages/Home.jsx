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

        <main className="p-6 lg:p-10">

          <TopBar />

          {renderContent()}

        </main>

      </DashboardLayout>
    </>
  );
}


export default Home;