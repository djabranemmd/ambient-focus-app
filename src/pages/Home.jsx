import AuroraBackground from "../components/layout/AuroraBackground";
import DashboardLayout from "../components/layout/DashboardLayout";
import TopBar from "../components/layout/TopBar";

import TimerSection from "../components/timer/TimerSection";
import Statistics from "../components/stats/Statistics";
import DashboardExtras from "../components/stats/DashboardExtras";
import AudioMixer from "../components/audio/AudioMixer";

function Home() {
  return (
    <>
      <AuroraBackground />

      <DashboardLayout>
        <main className="p-6 lg:p-10">
          <TopBar />

          <TimerSection />

          <Statistics />

          <DashboardExtras />

          <AudioMixer />
        </main>
      </DashboardLayout>
    </>
  );
}

export default Home;