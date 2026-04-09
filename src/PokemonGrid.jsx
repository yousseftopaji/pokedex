import PokemonCard from "./PokemonCard";

function PokemonGrid({ pokemons }) {
  return (
    <section className="characters-grid">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </section>
  );
}

export default PokemonGrid;
