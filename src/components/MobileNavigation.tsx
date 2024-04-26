import { useState } from "react";
import Navigation from "components/Navigation";
import FancyToggle from "components/FancyToggle";

function MobileNavigation() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="flex justify-end md:hidden">
      <button
        className="box-content aspect-square border-l border-emerald-800 bg-emerald-600 p-4 "
        onClick={() => {
          setNavOpen(!navOpen);
        }}
        title="Toggle Navigation"
      >
        <FancyToggle isOn={navOpen} />
      </button>

      <div className="absolute left-0 top-full w-full">
        <div
          className={`grid transition-[grid-template-rows] ${navOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        >
          <div className="overflow-hidden">
            <div className="border-y border-emerald-800">
              <Navigation
                onSelection={() => {
                  setNavOpen(false);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <button
        className={`absolute top-full -z-10 w-full bg-emerald-800/50 backdrop-blur-sm transition-opacity ${navOpen ? "h-[calc(100vh-100%)] opacity-100" : "opacity-0"}`}
        onClick={() => {
          setNavOpen(false);
        }}
      ></button>
    </div>
  );
}

export default MobileNavigation;
