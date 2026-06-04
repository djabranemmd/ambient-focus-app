import { useEffect, useState } from "react";
import StatsCard from "./StatsCard";

function Statistics() {
  const [stats, setStats] =
    useState({
      totalSessions: 0,
      totalMinutes: 0,
      todaySessions: 0,
      streak: 0,
    });

  useEffect(() => {
    const sessions =
      JSON.parse(
        localStorage.getItem(
          "focusSessions"
        )
      ) || [];

    const totalSessions =
      sessions.length;

    const totalMinutes =
      sessions.reduce(
        (sum, session) =>
          sum +
          session.duration / 60,
        0
      );

    const today =
      new Date().toDateString();

    const todaySessions =
      sessions.filter(
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

    const streak =
      uniqueDays.length;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStats({
      totalSessions,
      totalMinutes,
      todaySessions,
      streak,
    });
  }, []);

  const hours = Math.floor(
    stats.totalMinutes / 60
  );

  const minutes =
    stats.totalMinutes % 60;

  return (
    <section className="max-w-6xl mx-auto px-6 mt-20">
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
          value={
            stats.totalSessions
          }
        />

        <StatsCard
          title="Today"
          value={
            stats.todaySessions
          }
        />

        <StatsCard
          title="Streak"
          value={`${stats.streak} days`}
        />
      </div>
    </section>
  );
}

export default Statistics;