import { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home.jsx";
import Results from "./containers/Results/Results";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flexbox">
      <Navbar />
      <Home />
      <Results />
    </div>
  );
}

export default App;
