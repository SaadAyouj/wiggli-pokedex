import React from 'react'
import { Link } from 'react-router-dom';

const PokeCard = ({ pokemon }) => {
    return (
        <Link to={`/pokemon/${pokemon.id}`}>
            <div className="card col-2">
                <img src={pokemon.sprites.front_default} alt="Pokemon_Picture" style={{width:"100%"}} />
                <div className="wrap">
                    <h2><b>{ pokemon.name }</b></h2>
                        {pokemon.types.map(type => {
                            return (
                            <h4>{type.type.name}</h4>
                            )
                        })}
                </div>
            </div>
        </Link>
    )
}

export default PokeCard
