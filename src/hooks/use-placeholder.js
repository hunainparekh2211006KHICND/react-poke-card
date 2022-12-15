import { act } from "@testing-library/react";
import { useEffect, useState } from "react";

const UsePlaceHolder = ({
    filter,children
})=>{
    const [placeHolder,setPlaceHolder] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            let url = "https://pokeapi.co/api/v2/pokemon";
            if(filter?.id){
                url = `${url}/${filter.id}`
            }
            await fetch(url).then((result)=> result.json()).then((response)=> setPlaceHolder(response));
        }
        fetchData();
    },[filter.id]);
    return placeHolder;
}
export default UsePlaceHolder;