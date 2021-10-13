import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios';

const PokemonView = ({ match }) => {
    const id = match.params.id;
    const [pokemonDetails, setPokemonDetails] = useState();
    const [loading, setLoading] = useState(true);

    const getPokemonInfo = async (id) => {
        const details = await getPokemonData(id);
        setPokemonDetails(details.data);
        setLoading(false);
    }

    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        return res;
    }

    useEffect(() => {
        getPokemonInfo(id);
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            { loading ? <h1>Loading. . .</h1> : (
                    <div className="info">
                    <img src={pokemonDetails.sprites.front_default} alt="Pokemon_Picture" style={{width:"30%", marginBottom:"-60px"}} />
                    <div className="info">
                        <h2><b >{ pokemonDetails.name }</b></h2>
                            {pokemonDetails.types.map(type => {
                                return (
                                <h4 style={{color:"green"}} ><i>{type.type.name}</i></h4>
                                )
                            })}
                    </div>
                </div>
                ) }
        </motion.div>
    )
}

export default PokemonView
