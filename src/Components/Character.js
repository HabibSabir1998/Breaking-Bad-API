import React from 'react';
import CharacterItem from "./CharacterItem";
import Spinner from "./ui/Spinner"

const Character = ({items,isLoading}) => {
    return isLoading ? (
        <Spinner /> ) :
        (
            <section className="cards">{items.map((item) => <CharacterItem key ={item.char_id} item={item}></CharacterItem> )} </section>
        )
        
    
}


export default Character;