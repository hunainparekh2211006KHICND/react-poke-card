import './App.css';
import SideBar from './components/side-bar';
import MainSection from './components/main-section';
import { useState } from 'react';
function App() {
  const [activePokemon,setActivePokemon] = useState('bulbasaur');
  const handleActivePokemon=(e)=>{
    setActivePokemon(e);
  }
  return (
    <div className="App">
      <SideBar handleActivePokemon={handleActivePokemon}/>
      <MainSection activePokemon={activePokemon}/>
    </div>
  );
}

export default App;
