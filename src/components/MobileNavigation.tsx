import { useState } from "react";
import Navigation from "components/Navigation";

function MobileNavigation() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="flex h-full justify-end md:hidden">
      <button
        className="aspect-square h-full border-l border-emerald-800 bg-emerald-600 text-xl hover:bg-emerald-700"
        onClick={() => {
          setNavOpen(!navOpen);
        }}
      >
        {navOpen ? "-" : "+"}
      </button>
      {navOpen && <Navigation />}
    </div>
  );
}

export default MobileNavigation;
