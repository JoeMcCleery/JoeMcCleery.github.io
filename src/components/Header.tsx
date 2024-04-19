import DesktopNavigation from "components/DesktopNavigation";
import MobileNavigation from "components/MobileNavigation";

function Header() {
  return (
    <header className="sticky top-0 max-h-screen border-b border-emerald-800 bg-emerald-700 text-emerald-50 md:border-b-0 md:border-r">
      <div className="grid grid-cols-[auto_1fr] md:h-full md:grid-cols-1 md:grid-rows-[auto_1fr]">
        <h1 className="p-4 text-3xl font-bold">Joe McCleery</h1>
        <MobileNavigation />
        <DesktopNavigation />
      </div>
    </header>
  );
}

export default Header;
