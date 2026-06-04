import DailyGoal from "./DailyGoal";
import SessionHistory from "./SessionHistory";

function DashboardExtras() {
  return (
    <section className="mt-10">
      <div className="grid md:grid-cols-2 gap-6">
        <DailyGoal />

        <SessionHistory />
      </div>
    </section>
  );
}

export default DashboardExtras;