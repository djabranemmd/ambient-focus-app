import { Clock3, Target, CalendarDays, Flame } from "lucide-react";
import { useMemo } from "react";
import StatsCard from "./StatsCard";
import { useFocus } from "../../context/FocusContext";

function Statistics() {
  const { sessions } = useFocus();

  const statistics = useMemo(() => {
    const totalSessions = sessions.length;

    const totalMinutes = sessions.reduce(
      (sum, session) => sum + session.duration / 60,
      0
    );

    const today = new Date().toDateString();

    const todaySessions = sessions.filter(
      (session) => new Date(session.date).toDateString() === today
    ).length;

    const days = [
      ...new Set(
        sessions.map((session) => new Date(session.date).toDateString())
      ),
    ]
      .map((date) => new Date(date))
      .sort((a, b) => b - a);

    let streak = 0;

    if (days.length > 0) {
      let current = new Date();
      current.setHours(0, 0, 0, 0);

      for (const day of days) {
        day.setHours(0, 0, 0, 0);

        const difference = (current - day) / (1000 * 60 * 60 * 24);

        if (difference === 0 || difference === 1) {
          streak++;
          current = day;
        } else {
          break;
        }
      }
    }

    return {
      totalSessions,
      totalMinutes,
      todaySessions,
      streak,
    };
  }, [sessions]);

  const hours = Math.floor(statistics.totalMinutes / 60);
  const minutes = Math.floor(statistics.totalMinutes % 60);

  const cards = [
    {
      title: "Total Focus Time",
      value: `${hours}h ${minutes}m`,
      icon: Clock3,
    },
    {
      title: "Sessions",
      value: statistics.totalSessions,
      icon: Target,
    },
    {
      title: "Today",
      value: statistics.todaySessions,
      icon: CalendarDays,
    },
    {
      title: "Streak",
      value: `${statistics.streak} days`,
      icon: Flame,
    },
  ];

  return (
    <section className="mt-10" aria-labelledby="statistics-title">
      <div className="mb-8">
        <h2
          id="statistics-title"
          className="text-3xl font-bold theme-text"
        >
          Statistics
        </h2>
        <p className="theme-text-muted mt-2">Track your focus progress.</p>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        role="list"
      >
        {cards.map((card) => (
          <div key={card.title} role="listitem">
            <StatsCard title={card.title} value={card.value} icon={card.icon} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Statistics;