import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import SideBar from './components/side-bar';

function App() {
  const [pokemons,setPokemons] = useState([]);

  const fetchPokemons = async ()=>{
    const data = await fetch('https://pokeapi.co/api/v2/pokemon/').then((response)=> response.json());
    setPokemons(data.results);
  }
  useEffect(()=>{
    fetchPokemons();
  },[]);
  return (
    <div className="App">
      <SideBar pokemons={pokemons}/>
    </div>
  );
}

export default App;
