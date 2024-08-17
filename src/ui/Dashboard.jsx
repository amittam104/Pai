import DashboardLineChart from "@/features/dashboard/DashboardLineChart";
import DashboardPieChart from "@/features/dashboard/DashboardPieChart";
import SummaryTable from "@/features/dashboard/SummaryTable";
import DashboardCards from "@/features/dashboard/DashboardCards";

export default function DashboardUi() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <DashboardCards />
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <SummaryTable />
          <DashboardPieChart />
        </div>
        <div className="w-full">
          <DashboardLineChart />
        </div>
      </main>
    </div>
  );
}
