import "./PokemonCard.css";
import { Link } from "react-router-dom";

function PokemonCard({ pokemon }) {
  const typeColors = {
    normal: "#A8A878",
    fire: "#F08030",
    water: "#6890F0",
    electric: "#F8D030",
    grass: "#78C850",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    fairy: "#EE99AC",
  };

  const primaryType = pokemon?.types?.[0].type?.name;
  const backgroundColor = typeColors[primaryType] || "#888";

  return (
    <Link
      to={`/pokemon/${pokemon.id}`}
      state={{ pokemon }}
      className="character-card"
      style={{ backgroundColor }}
    >
      <p className="character-id">#{pokemon?.id}</p>

      <div className="character-content">
        <h3 className="character-name">{pokemon?.name}</h3>
      </div>

      <img
        className="character-image"
        src={pokemon?.sprites?.front_default || null}
        alt={pokemon?.name}
      />
    </Link>
  );
}
export default PokemonCard;
