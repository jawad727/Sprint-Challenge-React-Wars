import React from 'react';
import CharacterCard from './CharacterCard';
import './StarWars.css';


const StarWarsNames = (props) => {
    return (
        <div>
            {props.starwarsChars.map((char) => {
                return <CharacterCard key={char.created} char={char} className="NameStyles"/>
            })}
        </div>
    )
}

export default StarWarsNames