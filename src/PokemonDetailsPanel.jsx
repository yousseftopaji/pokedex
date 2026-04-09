import { Link, useLocation, useParams } from "react-router-dom";
import { useCharacter } from "./hooks/useCharacter";
import "./PokemonDetailsPanel.css";

function PokemonDetailsPanel() {
  const { id } = useParams();
  const location = useLocation();
  const pokemonFromState = location.state?.pokemon;

  const detailUrl = pokemonFromState
    ? null
    : "https://pokeapi.co/api/v2/pokemon/" + id + "/";
  const { data, isLoading, error } = useCharacter(detailUrl);
  const pokemon = pokemonFromState || data;

  if (!pokemon && isLoading) return <p>Loading...</p>;
  if (!pokemon && error) return <p>Failed to load pokemon details</p>;
  if (!pokemon) return <p>No pokemon found</p>;

  return (
    <aside className="pokemon-details-panel">
      <header className="pokemon-details-header">
        <div>
          <p className="pokemon-details-id">#{pokemon.id}</p>
          <h2 className="pokemon-details-name">{pokemon.name}</h2>
        </div>
        <Link className="pokemon-details-back" to="/pokedex">
          Back
        </Link>
      </header>

      <div className="pokemon-details-layout">
        <section className="pokemon-details-gallery">
          <div className="sprite-card">
            <img
              src={pokemon.sprites?.front_default || null}
              alt={pokemon.name}
            />
          </div>
          <div className="sprite-card">
            <img
              src={pokemon.sprites?.back_default || null}
              alt={pokemon.name}
            />
          </div>
          <div className="sprite-card">
            <img
              src={pokemon.sprites?.front_shiny || null}
              alt={pokemon.name}
            />
          </div>
          <div className="sprite-card">
            <img src={pokemon.sprites?.back_shiny || null} alt={pokemon.name} />
          </div>
        </section>

        <section className="pokemon-details-info">
          <div className="info-card">
            <h3>Basics</h3>
            <p>Height: {(pokemon.height / 10).toFixed(1)} m</p>
            <p>Weight: {(pokemon.weight / 10).toFixed(1)} kg</p>
          </div>

          <div className="info-card">
            <h3>Types</h3>
            <div className="pill-list">
              {pokemon.types.map((t) => (
                <span key={t.type.name} className="pill">
                  {t.type.name}
                </span>
              ))}
            </div>
          </div>

          <div className="info-card">
            <h3>Abilities</h3>
            <div className="pill-list">
              {pokemon.abilities.map((a) => (
                <span key={a.ability.name} className="pill">
                  {a.ability.name}
                  {a.is_hidden ? " (hidden)" : ""}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="info-card stats-card">
        <h3>Stats</h3>
        <div className="stats-list">
          {pokemon.stats.map((s) => (
            <div key={s.stat.name} className="stat-row">
              <span>{s.stat.name}</span>
              <div className="stat-bar">
                <div
                  className="stat-fill"
                  style={{ width: `${Math.min(s.base_stat, 100)}%` }}
                />
              </div>
              <strong>{s.base_stat}</strong>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}

export default PokemonDetailsPanel;
