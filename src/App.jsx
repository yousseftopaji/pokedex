import { Link, Navigate, Route, Routes } from "react-router-dom";
import PokedexPage from "./PokedexPage";
import PokemonDetailsPanel from "./PokemonDetailsPanel";
import AboutPage from "./AboutPage";

function App() {
  return (
    <div>
      <nav>
        <Link to="/pokedex">Pokedex</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/pokedex" replace />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/pokemon/:id" element={<PokemonDetailsPanel />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
