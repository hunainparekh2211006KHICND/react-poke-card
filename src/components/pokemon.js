import UsePlaceHolder from '../hooks/use-placeholder';
import { memo } from 'react';
import './pokemon.css';

const Pokemon = ({name})=>{
    const placeholder =  UsePlaceHolder({
        filter:{
            id:name
        }
    });
    let image;
    if(placeholder.length !== 0){
        image = <img className='image' src={placeholder.sprites.other.home.front_default} alt="poke_image"/>;
        // console.log(placeholder.sprites.other.home.front_default);
    }
    return <div className='pokemon-content'>
        {image}
    </div>
      
}
export default memo(Pokemon);