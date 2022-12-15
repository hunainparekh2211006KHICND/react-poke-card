import './side-bar.css';
import logo from '../logo.png';
import SideBarItem from "./side-bar-item";
import UsePlaceHolder from '../hooks/use-placeholder';

const SideBar = ({handleActivePokemon})=>{
    const placeholders = UsePlaceHolder([]);
    let pokemons;
    if(placeholders.length !== 0){
        pokemons = placeholders.results.map((pokemon)=> <SideBarItem name={pokemon.name} key={pokemon.name} handleActivePokemon={handleActivePokemon}>{pokemon.name}</SideBarItem>)
    }
    return (
    <div className="SideBar">
        <div className='logo'>
            <img src={logo} className="logo-img" alt='logo'></img>
        </div>
        <ul className='pokemon-list'>
            {pokemons}
        </ul>
    </div>);
}

export default SideBar;