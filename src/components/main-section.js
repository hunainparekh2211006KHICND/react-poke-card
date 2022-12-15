import { memo } from 'react';
import './main-section.css';
import Pokemon from './pokemon';

const MainSection =({activePokemon})=>{
    return( 
    <div className="main">
        <div className='pokemon-data'>
            <Pokemon name={activePokemon}/>
        </div>
    </div>);
}
export default memo(MainSection);