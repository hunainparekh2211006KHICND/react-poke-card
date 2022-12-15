import './side-bar.css';
import logo from '../logo.png';
import SideBarItem from "./side-bar-item";

const SideBar = (props)=>{
    const pokemons = props.pokemons.map((pokemon)=> <SideBarItem key={pokemon.name}>{pokemon.name}</SideBarItem>)
    return (
    <div className="SideBar">
        <div className='logo'>
            <img src={logo} className="logo-img"></img>
        </div>
        <ul className='pokemon-list'>
            {pokemons}
        </ul>
    </div>);
}

export default SideBar;