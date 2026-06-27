import { Timer, Headphones, BarChart3 } from "lucide-react";

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-6">Ambient Focus</h1>

        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
          Create your perfect study atmosphere with relaxing sounds, focus
          sessions and productivity tracking.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-16">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
          <Headphones size={36} />
          <h3 className="mt-4 text-xl font-semibold">Ambient Sounds</h3>
          <p className="text-gray-400 mt-2">Rain, Forest, Ocean and more.</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
          <Timer size={36} />
          <h3 className="mt-4 text-xl font-semibold">Focus Sessions</h3>
          <p className="text-gray-400 mt-2">Pomodoro and custom timers.</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
          <BarChart3 size={36} />
          <h3 className="mt-4 text-xl font-semibold">Progress Tracking</h3>
          <p className="text-gray-400 mt-2">Monitor your daily productivity.</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;