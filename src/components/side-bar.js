import './side-bar.css';
import logo from '../logo.png';
import SideBarItem from "./side-bar-item";

const SideBar = ({handleActivePokemon,placeholders,mainApiUrl})=>{
    const handleUrl = (e)=>{
        mainApiUrl(e.target.value);
    }
    return (
    <div className="SideBar">
        <div className='logo'>
            <img src={logo} className="logo-img" alt='logo'></img>
        </div>
        <div className='prev_next_div'>
           {placeholders.previous != null ? <button className='prev_btn' onClick={handleUrl} value={placeholders.previous}><i className="fa-solid fa-arrow-left" style={{marginRight:'10px'}}></i>Previous</button> : null} 
            <button className='next_btn' data-testid="next_btn" onClick={handleUrl} value={placeholders.next}>Next<i className="fa-solid fa-arrow-right"style={{marginLeft:'10px'}}></i></button>
        </div>
        <ul className='pokemon-list'>
            {placeholders.length !== 0 ? placeholders.results.map((pokemon)=> <SideBarItem name={pokemon.name} key={pokemon.name} handleActivePokemon={handleActivePokemon}>{pokemon.name}</SideBarItem>) : null}
        </ul>
    </div>);
}

export default SideBar;