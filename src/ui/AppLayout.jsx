import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid grid-rows-12 grid-cols-7 h-screen">
      <Sidebar />
      <Header />
      <main className="bg-gray-50 col-span-6 row-span-11 py-10 px-14 overflow-y-scroll">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
