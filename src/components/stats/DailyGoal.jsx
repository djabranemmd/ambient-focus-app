import { useFocus } from "../../context/FocusContext";

const DAILY_GOAL_MINUTES = 240;

function DailyGoal() {
  const { sessions } = useFocus();

  const totalMinutesToday = sessions
    .filter(
      (session) =>
        new Date(
          session.date
        ).toDateString() ===
        new Date().toDateString()
    )
    .reduce(
      (sum, session) =>
        sum + session.duration / 60,
      0
    );

  const progress = Math.min(
    (totalMinutesToday /
      DAILY_GOAL_MINUTES) *
      100,
    100
  );

  return (
    <div
      className="
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        rounded-3xl
        p-6
      "
    >
      <h3 className="text-xl font-semibold">
        Daily Goal
      </h3>

      <p className="text-gray-400 mt-2">
        Goal: 4 Hours
      </p>

      <div className="mt-6">
        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-500"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-300">
        {Math.floor(
          totalMinutesToday / 60
        )}
        h{" "}
        {Math.floor(
          totalMinutesToday % 60
        )}
        m
        {" / "}
        4h
      </p>
    </div>
  );
}

export default DailyGoal;