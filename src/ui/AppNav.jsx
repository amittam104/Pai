import {
  Banknote,
  House,
  IdCard,
  MessageSquareText,
  Settings,
  User,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function AppNav() {
  const location = useLocation();

  return (
    <nav className="w-full">
      <ul className="flex flex-col items-stretch gap-4 font-semibold text-slate-400 ">
        <li
          className={`hover:bg-slate-50 hover:text-slate-500 w-100  ${
            location.pathname === "/dashboard" && "bg-slate-100 text-slate-600"
          }`}
        >
          <Link to="/dashboard" className="flex items-center gap-4 px-14 py-4">
            <House /> <span>Dashboard</span>
          </Link>
        </li>
        <li
          className={`hover:bg-slate-50 hover:text-slate-500 w-100 ${
            location.pathname === "/transactions" &&
            "bg-slate-100 text-slate-600"
          }`}
        >
          <Link
            to="/transactions"
            className="flex items-center gap-4 px-14 py-4"
          >
            <Banknote />
            <span>Transactions</span>
          </Link>
        </li>
        <li
          className={`hover:bg-slate-50 hover:text-slate-500 w-100  ${
            location.pathname === "/accounts" && "bg-slate-100 text-slate-600"
          }`}
        >
          <Link to="/accounts" className="flex items-center gap-4 px-14 py-4">
            <IdCard /> <span>Accounts</span>
          </Link>
        </li>
        <li
          className={`hover:bg-slate-50 hover:text-slate-500 w-100 ${
            location.pathname === "/users" && "bg-slate-100 text-slate-600"
          }`}
        >
          <Link to="/users" className="flex items-center gap-4 px-14 py-4">
            <User /> <span>Users</span>
          </Link>
        </li>
        <li
          className={`hover:bg-slate-50 hover:text-slate-500 w-100 ${
            location.pathname === "/feedback" && "bg-slate-100 text-slate-600"
          }`}
        >
          <Link to="/feedback" className="flex items-center gap-4 px-14 py-4">
            <MessageSquareText /> <span>Feedback</span>
          </Link>
        </li>
        <li
          className={`hover:bg-slate-50 hover:text-slate-500 w-100 ${
            location.pathname === "/settings" && "bg-slate-100 text-slate-600"
          }`}
        >
          <Link to="/settings" className="flex items-center gap-4 px-14 py-4">
            <Settings /> <span>Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
