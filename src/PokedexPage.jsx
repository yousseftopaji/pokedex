import { useState } from "react";
import Pagination from "./Pagination";
import PokemonGrid from "./PokemonGrid";
import { useCharacters } from "./hooks/useCharacters";

function PokedexPage() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const { data, error, isLoading } = useCharacters(url);

  if (isLoading) return <p>Loading...</p>;
  if (error)
    return <p>An error occurred while fetching data: {error.message}</p>;

  return (
    <div>
      <h1>Pokedex</h1>
      <PokemonGrid pokemons={data.results} />
      <Pagination
        nextUrl={data.next}
        previousUrl={data.previous}
        setUrl={setUrl}
      />
    </div>
  );
}

export default PokedexPage;
