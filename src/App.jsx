import { useState } from "react";

// import "./App.css";
// import SearchBox from "./components/SearchBox";
// import InfoBox from "./components/InfoBox";
import WeatherApp from "./components/WeatherApp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <SearchBox />
      <InfoBox /> */}
      <WeatherApp />
    </>
  );
}

export default App;
