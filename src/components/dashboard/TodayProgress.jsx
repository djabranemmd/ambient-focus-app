import { memo } from "react";
import { Target, CheckCircle } from "lucide-react";
import Card from "../ui/Card";
import { useFocus } from "../../context/FocusContext";

const DAILY_GOAL = 4 * 60;

function TodayProgress() {
  const { sessions } = useFocus();

  const today = new Date().toDateString();

  const todayMinutes = sessions
    .filter((session) => new Date(session.date).toDateString() === today)
    .reduce((total, session) => total + session.duration / 60, 0);

  const progress = Math.min((todayMinutes / DAILY_GOAL) * 100, 100);

  const completed = progress >= 100;

  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold theme-text">Today's Progress</h3>
          <p className="theme-text-muted mt-1 text-sm">
            Keep building your focus habit.
          </p>
        </div>

        <div className="w-11 h-11 rounded-2xl bg-purple-500/20 flex items-center justify-center">
          {completed ? (
            <CheckCircle size={22} className="text-green-400" />
          ) : (
            <Target size={22} className="text-purple-400" />
          )}
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between mb-2 text-sm">
          <span className="theme-text-muted">Progress</span>
          <span className="theme-text font-semibold">
            {Math.round(progress)}%
          </span>
        </div>

        <div className="h-3 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
          <div
            className="h-full bg-purple-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-5 flex justify-between text-sm">
        <span className="theme-text-muted">Today</span>
        <span className="theme-text font-medium">
          {Math.floor(todayMinutes / 60)}h{" "}
          {Math.floor(todayMinutes % 60)}m
          {" / "}
          4h
        </span>
      </div>
    </Card>
  );
}

export default memo(TodayProgress);