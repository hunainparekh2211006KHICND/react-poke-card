import './App.css';
import SideBar from './components/side-bar';
import MainSection from './components/main-section';
import { useState } from 'react';
import UsePlaceHolder from './hooks/use-placeholder';
function App() {
  const [activePokemon,setActivePokemon] = useState('bulbasaur');

  const [apiUrl,setApiUrl]  = useState('https://pokeapi.co/api/v2/pokemon');
    const placeholders = UsePlaceHolder({
        filter:{
            url: apiUrl,
        }
    });
  const handleActivePokemon=(e)=>{
    setActivePokemon(e);
  }

  const handleApiUrl = (e)=>{
    setApiUrl(e);
  }
  return (
    <div className="App">
      <SideBar handleActivePokemon={handleActivePokemon} placeholders={placeholders} mainApiUrl={handleApiUrl}/>
      <MainSection activePokemon={activePokemon}/>
    </div>
  );
}

export default App;
