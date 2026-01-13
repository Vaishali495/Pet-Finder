import "./App.css";
import Header from "./Components/Header";
import Hero_Section from "./Components/Hero_Section";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-b from-amber-50 to-orange-50">
      <Header />
      {/* Main Content */}
      <div className="overflow-x-hidden">
        <Hero_Section />
      </div>
    </div>
  );
}

export default App;
