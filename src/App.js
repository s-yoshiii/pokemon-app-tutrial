import { useEffect, useState } from "react";
import "./App.css";
import { getAllPokemon, getPokemon } from "./utiles/pokemon";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon/";
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPokemonData = async () => {
      let res = await getAllPokemon(initialURL);
      // 各詳細データを取得
      loadPokemon(res.results);

      setLoading(false);
    };
    fetchPokemonData();
  }, []);
  const loadPokemon = (data) => {
    let _pokemonData = Promise.all(
      data.map((pokemon) => {
        console.log(pokemon);
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
  };
  return (
    <div className="App">{loading ? <p>Loading...</p> : <p>Loaded</p>}</div>
  );
}

export default App;
