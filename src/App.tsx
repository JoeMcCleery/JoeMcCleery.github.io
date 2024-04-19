import Content from "components/Content";
import Footer from "components/Footer";
import Header from "components/Header";

function App() {
  return (
    <div className="relative grid min-h-screen grid-rows-[auto_1fr] md:grid-cols-[auto_1fr] md:grid-rows-1">
      <Header />
      <div className="grid grid-rows-[1fr_auto]">
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
