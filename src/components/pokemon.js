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
    let inches;
    let feet;
    let weight;
    let types;
    let abilities;
    if(placeholder.length !== 0){
        image = <img className='image' src={placeholder.sprites.other.home.front_default} alt="poke_image"/>;
        pokemon_name = <h3>{placeholder.name}</h3>
        placeholder.id <10 ? pokemon_code = <h3>#00{placeholder.id}</h3> :pokemon_code = <h3>#0{placeholder.id} </h3>;
        inches = Math.round(placeholder.height * 3.937);
        feet = Math.floor(inches / 12);
        inches %=12;
        weight = placeholder.weight;
        weight = (weight / 4.536).toFixed(1);
        types = placeholder.types;
        types = types.map((item)=> <button className={item.type.name}>{item.type.name}</button>)
        abilities = placeholder.abilities;
        abilities = abilities.map((item)=> <button className='ability-btn'>{item.ability.name}</button>)
    }
    return <div className='pokemon-content'>
        <div className='heading'>
            {pokemon_name}
            {pokemon_code}
        </div>
        <div className='content'>
            <div className='image-div'>
                {image}
            </div>
            <div className='desc-div'>
                <div className='up-div'>
                    <div>
                        <p>Height</p>
                        <h3>{feet}' {inches}"</h3>
                    </div>
                    <div>
                        <p>Weight</p>
                        <h3>{weight} lbs</h3>
                    </div>
                </div>
                <div className='btn-content-div'>
                    <p>Types</p>
                    <div>{types}</div>
                </div>
                <div className='btn-content-div'>
                    <p>Abilities</p>
                    <div>{abilities}</div>
                </div>
            </div>
            
            <div className='stats-div'>
            </div>
        </div>
       
        
    </div>
      
}
export default memo(Pokemon);