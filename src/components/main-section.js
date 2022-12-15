import { memo } from 'react';
import './main-section.css';
import Pokemon from './pokemon';

const MainSection =()=>{
    return( 
    <div className="main">
        <div className='pokemon-data'>
            <Pokemon id="1"/>
        </div>
    </div>);
}
export default memo(MainSection);