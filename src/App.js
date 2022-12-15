import './App.css';
// import { useEffect } from 'react';
import { useEffect, useState } from 'react';
import SideBar from './components/side-bar';
import MainSection from './components/main-section';
import UsePlaceHolder from './hooks/use-placeholder';

function App() {
  const [pokemons,setPokemons] = useState([]);
  const data = UsePlaceHolder([]);
  // const fetchPokemons = async ()=>{
  //   if(data.length !== 0){
  //     setPokemons(data.results);
  //   }
  // }
  useEffect(()=>{
    setPokemons(data.results);
  },[])
  return (
    <div className="App">
      <SideBar pokemons={pokemons}/>
      {/* <MainSection/> */}
      {/* {data} */}
    </div>
  );
}

export default App;
