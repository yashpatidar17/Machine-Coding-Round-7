import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home/Home";
import { Continent } from "./Pages/Continent/Continent";
import { Country } from "./Pages/Country/Country";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/continent/:ID" element={<Continent />} />
        <Route path="/country/:ID" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
