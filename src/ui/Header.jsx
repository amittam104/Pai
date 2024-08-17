import { Button } from "@/components/ui/button";

function Header() {
  return (
    <header className="bg-white border-b border-slate-200 row-span-1 col-span-6">
      <div className="flex items-center justify-between py-3 px-6">
        <p className="font-semibold text-lg">Welcome back</p>
        <div className="flex items-center gap-4">
          <Button variant="ghost">Log in</Button>
          <Button>Sign up</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
