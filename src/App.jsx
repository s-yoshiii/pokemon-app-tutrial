import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { getAllPokemon, getPokemon } from "./utiles/pokemon";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon/";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      let res = await getAllPokemon(initialURL);
      // 各詳細データを取得
      loadPokemon(res.results);

      setLoading(false);
    };
    fetchPokemonData();
  }, []);
  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        // console.log(pokemon);
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };
  console.log(pokemonData);

  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="cardContainer">
          {pokemonData.map((pokemon, i) => {
            return <Card key={i} pokemon={pokemon} />;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
