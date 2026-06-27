import { memo } from "react";
import DashboardHero from "./DashboardHero";
import FocusOverview from "./FocusOverview";
import QuickStart from "./QuickStart";
import TodayProgress from "./TodayProgress";
import ProductivityCard from "./ProductivityCard";

function DashboardContent() {
  return (
    <section className="mt-8 space-y-6" aria-label="Dashboard overview">
      <DashboardHero />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FocusOverview />
        <TodayProgress />
      </div>

      <QuickStart />

      <ProductivityCard />
    </section>
  );
}

export default memo(DashboardContent);