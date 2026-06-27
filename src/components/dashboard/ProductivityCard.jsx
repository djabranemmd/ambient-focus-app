import { memo } from "react";
import { TrendingUp, Clock, Award } from "lucide-react";
import Card from "../ui/Card";
import { useFocus } from "../../context/FocusContext";

function ProductivityCard() {
  const { sessions } = useFocus();

  const totalSessions = sessions.length;

  const totalMinutes = sessions.reduce(
    (total, session) => total + session.duration / 60,
    0
  );

  const averageSession =
    totalSessions > 0 ? Math.round(totalMinutes / totalSessions) : 0;

  const days = sessions.reduce((acc, session) => {
    const day = new Date(session.date).toLocaleDateString();
    acc[day] = (acc[day] || 0) + session.duration / 60;
    return acc;
  }, {});

  const bestDay = Object.entries(days).sort((a, b) => b[1] - a[1])[0];

  const stats = [
    {
      icon: TrendingUp,
      title: "Total Sessions",
      value: totalSessions,
    },
    {
      icon: Clock,
      title: "Average Session",
      value: `${averageSession} min`,
    },
    {
      icon: Award,
      title: "Best Day",
      value: bestDay ? bestDay[0] : "No data",
    },
  ];

  return (
    <Card>
      <div>
        <h3 className="text-xl font-semibold theme-text">
          Productivity Insights
        </h3>
        <p className="theme-text-muted mt-1">
          Understand your focus performance.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl bg-black/5 dark:bg-white/5 p-4"
            >
              <Icon size={22} className="text-purple-400" />
              <p className="text-sm theme-text-muted mt-3">{stat.title}</p>
              <p className="text-xl font-bold theme-text mt-1 truncate">
                {stat.value}
              </p>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default memo(ProductivityCard);