import { useEffect, useState } from "react";
import "./App.css";
import { getAllPokemon } from "./utiles/pokemon";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon/";
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPokemonData = async () => {
      let res = await getAllPokemon(initialURL);
      console.log(res);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);
  return (
    <div className="App">{loading ? <p>Loading...</p> : <p>Loaded</p>}</div>
  );
}

export default App;
