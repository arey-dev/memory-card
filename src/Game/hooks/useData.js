import { useState, useEffect } from "react";
import { shuffleArray } from "../game_utils";

export function useData(num) {
  const [data, setData] = useState({ pokemons: [] });

  const URL = "https://pokeapi.co/api/v2/pokemon/";
  let pokemonNum = num;

  useEffect(() => {
    const fetchData = async () => {
      const pokemonList = [];

      for (let i = 1; i <= pokemonNum; i++) {
        const result = await fetch(URL + i);
        const pokemon = await result.json();
        const name = pokemon.name;
        const id = pokemon.id;
        const imgUrl = pokemon.sprites.front_default;

        pokemonList.push({ name, id, imgUrl });
      }

      setData({ pokemons: pokemonList });
    };

    fetchData();
  }, []);

  return shuffleArray(data.pokemons);
}
