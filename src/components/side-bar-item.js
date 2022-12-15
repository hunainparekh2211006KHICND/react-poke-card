const SideBarItem = ({children,name,handleActivePokemon})=>{
    const ActivePokemon =(e)=>{
        handleActivePokemon(e.target.value);
    }
    return <li><button onClick={ActivePokemon} value={name}>{children}</button></li>;
}

export default SideBarItem;