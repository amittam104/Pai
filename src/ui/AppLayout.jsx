import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid grid-rows-2 grid-cols-6 h-screen">
      <Sidebar />
      <Header />
      <main className="bg-gray-600 col-span-5">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
