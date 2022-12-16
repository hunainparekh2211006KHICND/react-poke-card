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
    let pokemon_name;
    let pokemon_code;
    if(placeholder.length !== 0){
        image = <img className='image' src={placeholder.sprites.other.home.front_default} alt="poke_image"/>;
        pokemon_name = <h3>{placeholder.name}</h3>
        if(placeholder.id <10){
            pokemon_code = <h3>#00{placeholder.id}</h3>
        }
        else{
            pokemon_code = <h3>#0{placeholder.id}</h3>
        }
    }
    return <div className='pokemon-content'>
        <div className='heading'>
            {pokemon_name}
            {pokemon_code}
        </div>
        <div className='image-div'>
            {image}
        </div>
        
        
    </div>
      
}
export default memo(Pokemon);