import React, { useState } from 'react';


const Randompokemon = () => {
  const [pokemon, setPokemon] = useState();

  const getRandomPokemon = () => {
    const randomId = Math.floor(Math.random() * 1025) + 1; 

    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
      .then(res => res.json())
      .then(data => setPokemon(data))
      .catch(err => console.error("error:", err));
  };

  return (
    <div>
      <h2>Pokémon Aleatorio</h2>
      <button onClick={getRandomPokemon}> Obtener Pokémon</button>

      {pokemon && (
        <div>
          <h2>{pokemon.name.toUpperCase()}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />

          <p><b>Tipo(s):</b> {pokemon.types.map(t => t.type.name).join(', ')}</p>
          <p><b>Altura:</b> {pokemon.height / 10} m</p>
          <p><b>Peso:</b> {pokemon.weight / 10} kg</p>

          <p><b>Habilidades:</b> {pokemon.abilities.map(a => a.ability.name).join(', ')}</p>

          <h3>Estadísticas base:</h3>
          <ul>
            {pokemon.stats.map(stat => (
              <li key={stat.stat.name}>
                {stat.stat.name.toUpperCase()}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


export default Randompokemon;
