import { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import HomeBanner from "./components/HomeBanner/HomeBanner.jsx";
import SearchContainer from "./containers/SearchContainer/SearchContainer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="screen">
      <div className="screen_wrapper">
        <Navbar />
        <HomeBanner />
        <SearchContainer />
      </div>
    </div>
  );
}

export default App;
