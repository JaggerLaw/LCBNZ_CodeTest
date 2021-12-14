import React, {useState} from 'react';
import "./App.css"; 

const onSubmit =(e) =>{
    e.preventDefault();
}
export default function PokemonName(props) {
    const [search, setSearch] = useState('');
   
    return (
        <div align="center">
            <div> 
                <h1 className="font">{search}</h1>
                <form onSubmit={onSubmit}>
                <input className="input" onChange={e => setSearch(e.target.value.toLowerCase())} type ="text" placeholder="Search for Pokemon"></input>
                <button className="btn" onClick={(e) => props.getPokemon(search)}>Search</button>
                </form >
            </div>
        </div>
    )
}