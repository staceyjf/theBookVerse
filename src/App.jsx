import { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import HomeContainer from "./containers/HomeContainer/HomeContainer.jsx";
import ResultsContainer from "./containers/ResultsContainer/ResultsContainer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flexbox">
      <Navbar />
      <HomeContainer />
      <ResultsContainer />
    </div>
  );
}

export default App;
