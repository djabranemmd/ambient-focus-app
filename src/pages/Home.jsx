import AuroraBackground from "../components/layout/AuroraBackground";
import Hero from "../components/layout/Hero";
import AudioMixer from "../components/audio/AudioMixer";
import FocusTimer from "../components/timer/FocusTimer";
import Statistics from "../components/stats/Statistics";

function Home() {
  return (
    <>
      <AuroraBackground />

      <main className="min-h-screen pb-20">
        <Hero />

        <FocusTimer />

        <Statistics />

        <AudioMixer />
      </main>
    </>
  );
}

export default Home;