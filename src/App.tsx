import "./App.css";
import Navbar from "./components/navbar/Navbar";
import SketchAttempt from "./components/p5-components/SketchAttempt";

function App() {
  return (
    <>
      <SketchAttempt />
      <div className="app">
        <Navbar />
      </div>
    </>
  );
}

export default App;
