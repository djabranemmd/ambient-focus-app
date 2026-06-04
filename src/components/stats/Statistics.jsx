import StatsCard from "./StatsCard";
import { useFocus } from "../../context/FocusContext";

function Statistics() {
  const { sessions } = useFocus();

  const totalSessions = sessions.length;

  const totalMinutes = sessions.reduce(
    (sum, session) =>
      sum + session.duration / 60,
    0
  );

  const today = new Date().toDateString();

  const todaySessions = sessions.filter(
    (session) =>
      new Date(
        session.date
      ).toDateString() === today
  ).length;

  const uniqueDays = [
    ...new Set(
      sessions.map((session) =>
        new Date(
          session.date
        ).toDateString()
      )
    ),
  ];

  const streak = uniqueDays.length;

  const hours = Math.floor(
    totalMinutes / 60
  );

  const minutes = Math.floor(
    totalMinutes % 60
  );

  return (
    <section className="mt-10">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          Statistics
        </h2>

        <p className="text-gray-400 mt-2">
          Track your focus progress.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <StatsCard
          title="Total Focus Time"
          value={`${hours}h ${minutes}m`}
        />

        <StatsCard
          title="Sessions"
          value={totalSessions}
        />

        <StatsCard
          title="Today"
          value={todaySessions}
        />

        <StatsCard
          title="Streak"
          value={`${streak} days`}
        />
      </div>
    </section>
  );
}

export default Statistics;