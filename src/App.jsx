import { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import HomeContainer from "./containers/HomeContainer/HomeContainer.jsx";
import SearchContainer from "./containers/SearchContainer/SearchContainer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flexbox">
      <Navbar />
      <HomeContainer />
      <SearchContainer />
    </div>
  );
}

export default App;
