import React, {useState} from 'react';
import PokemonName from './PokemonName';
import axios from 'axios';
import Loading from './Loading';
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(false)
  const [moves, setMoves] = useState([])
  
  const getPokemon = async (name) =>{
    setLoading(true);

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await response.data;

    setPokemon(data);
    setMoves(data.moves);
    setLoading(false);
    getPokemonNames(data.moves)
  }
  const getPokemonNames = (data) =>{
    
    return data.map((moveData, key)=>(
      <div className="moveStyle" key={key}>
        <span>{key+1+":\t"+moveData.move.name}</span>
      </div>
    ))
  }
  
  return (
    <>
    <PokemonName getPokemon={getPokemon}/>
    <div align="center">
      {!loading && pokemon ? (<div> 
        <Loading/>
      </div>): null}
      <div className="imgContainer">
      <img className="img" src={pokemon.sprites?.front_default}/>
      {pokemon.name}
      </div>
      <div className="grid" align="center">
        {getPokemonNames(moves)}
      </div>
    </div>
    </>
  );
}
export default App;