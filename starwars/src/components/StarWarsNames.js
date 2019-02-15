import React from 'react';
import Name from './Name';
import './StarWars.css';


const StarWarsNames = (props) => {
    return (
        <div>
            {props.starwarsChars.map((item) => {
                return <Name name={item} className="NameStyles"/>
            })}
        </div>
    )
}

export default StarWarsNames