import About from "components/About";
import Github from "components/Github";

function Content() {
  return (
    <main className="bg-emerald-800">
      <div className="m-auto h-full max-w-7xl bg-emerald-600 text-emerald-50">
        <About />
        <Github />
      </div>
    </main>
  );
}

export default Content;
