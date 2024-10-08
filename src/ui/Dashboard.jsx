import DashboardCards from "@/features/dashboard/DashboardCards";
import SummaryTable from "@/features/dashboard/SummaryTable";

export default function DashboardUi() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <DashboardCards />
        <div>
          <SummaryTable />
        </div>
      </main>
    </div>
  );
}
