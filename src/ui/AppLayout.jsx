import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid grid-rows-12 grid-cols-6 h-screen">
      <Sidebar />
      <Header />
      <main className="bg-gray-50 col-span-5 row-span-11 py-12 px-16">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
