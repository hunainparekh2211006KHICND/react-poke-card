import { useEffect, useState } from "react";

const UsePlaceHolder = ({
    filter,children
})=>{
    const [placeHolder,setPlaceHolder] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            let api_url = filter.url;
            if(filter?.id){
                api_url = `${api_url}/${filter.id}`
            }
            await fetch(api_url).then((result)=> result.json()).then((response)=> setPlaceHolder(response));
        }
        fetchData();
    },[filter.id,filter.url]);
    return placeHolder;
}
export default UsePlaceHolder;