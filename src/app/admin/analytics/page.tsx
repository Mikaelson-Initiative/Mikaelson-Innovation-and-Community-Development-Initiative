import { AnalyticsHeader } from "@/features/admin/components/analytics/analytics-header";
import { AnalyticsNavbar } from "@/features/admin/components/analytics/analytics-navbar";
import { AnalyticsStats } from "@/features/admin/components/analytics/analytics-stats";
import { DeviceTypes } from "@/features/admin/components/analytics/device-types";
import { TopLocations } from "@/features/admin/components/analytics/top-locations";
import { TopPages } from "@/features/admin/components/analytics/top-pages";
import { TraficSources } from "@/features/admin/components/analytics/trafic-sources";
import { WaitlistGrowth } from "@/features/admin/components/analytics/waitlist-growth";

const AnalyticsHome = () => {
  return (
    <div className="bg-[#f8f9fa] dark:bg-brand-dark-bg-nav">
      <AnalyticsNavbar />
      <div className=" max-w-7xl mx-auto px-5 py-20  space-y-5">
        <AnalyticsHeader />
        <AnalyticsStats />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <WaitlistGrowth />
          <TraficSources />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          <TopPages />
          <DeviceTypes />
          <TopLocations />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsHome;
