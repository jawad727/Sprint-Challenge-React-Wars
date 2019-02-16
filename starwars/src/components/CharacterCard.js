import React from 'react';


const CharacterCard = (props) => {
    return (
        <div>
        <div>{props.char.birth_year}</div>
        <div>{props.char.name}</div>
        </div>
    )
}

export default CharacterCard