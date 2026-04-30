import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import PlayerDetails from "./pages/PlayerDetails";
import "./app.css";

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    dark ? root.classList.add("dark") : root.classList.remove("dark");
  }, [dark]);

  return (
    <BrowserRouter>
      <div className="app-container">

        <div className="navbar">
          <h1>🏏 Cricket Dashboard</h1>

          <button onClick={() => setDark(!dark)} className="toggle-btn">
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player/:id" element={<PlayerDetails />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;