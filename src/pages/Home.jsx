import AuroraBackground from "../components/layout/AuroraBackground";
import Hero from "../components/layout/Hero";

function Home() {
  return (
    <>
      <AuroraBackground />

      <main className="min-h-screen">
        <Hero />
      </main>
    </>
  );
}

export default Home;