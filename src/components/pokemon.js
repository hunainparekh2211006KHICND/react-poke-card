import UsePlaceHolder from '../hooks/use-placeholder';
import { memo, useState } from 'react';

const Pokemon = ({id})=>{
    const [pokemon,setPokemon] = useState([]);
    const fetchPokemon = async ()=>{
        const data = await UsePlaceHolder({
            filter:{
                id:id
            }
        });
        if(data.length !== 0){
            setPokemon(data);
        }
      }
      fetchPokemon();
      return <ul><li>Hello</li></ul>
      
}
export default memo(Pokemon);