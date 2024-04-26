interface FancyToggleProps {
  isOn: boolean;
}

function FancyToggle({ isOn }: FancyToggleProps) {
  return (
    <div className="relative size-full">
      <div className="absolute top-[50%] h-1 w-full -translate-y-[50%] bg-cyan-50"></div>
      <div
        className={`ease absolute left-[50%] h-full w-1 -translate-x-[50%] bg-cyan-50 transition-transform ${isOn ? "rotate-90" : "rotate-0"}`}
      ></div>
    </div>
  );
}

export default FancyToggle;
