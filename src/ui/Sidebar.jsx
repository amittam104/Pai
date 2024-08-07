import AppNav from "./AppNav";

function Sidebar() {
  return (
    <aside className="bg-white border-r border-r-slate-200 row-span-full col-span-1 flex flex-col items-center px-8 mt-2">
      <div className="flex items-center gap-4 mb-16">
        <img src="/PaiPNGLogo.png" className="w-12" alt="Pai Logo" />
        <p className="text-3xl font-bold">PAI</p>
      </div>
      <AppNav />
    </aside>
  );
}

export default Sidebar;
