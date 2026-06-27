import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import AuroraBackground from "../components/layout/AuroraBackground";
import DashboardLayout from "../components/layout/DashboardLayout";
import TopBar from "../components/layout/TopBar";
import DashboardContent from "../components/dashboard/DashboardContent";
import TimerSection from "../components/timer/TimerSection";
import AudioMixer from "../components/audio/AudioMixer";
import Statistics from "../components/stats/Statistics";
import DashboardExtras from "../components/stats/DashboardExtras";
import { useNavigation } from "../context/NavigationContext";

function Home() {
  const { activePage } = useNavigation();

  const reduceMotion = useReducedMotion();

  const renderPage = () => {
    switch (activePage) {
      case "focus":
        return <TimerSection />;

      case "sounds":
        return <AudioMixer />;

      case "statistics":
        return (
          <>
            <Statistics />
            <DashboardExtras />
          </>
        );

      case "dashboard":
      default:
        return <DashboardContent />;
    }
  };

  return (
    <>
      <AuroraBackground />

      <DashboardLayout>
        <main
          id="main-content"
          className="w-full max-w-7xl mx-auto overflow-hidden p-4 sm:p-6 lg:p-10"
        >
          <TopBar />

          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={reduceMotion ? false : { opacity: 0, y: 15 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.3 }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>
      </DashboardLayout>
    </>
  );
}

export default Home;