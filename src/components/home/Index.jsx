import React, { useState, useEffect } from 'react'
import PokeCard from './PokeCard'
import { motion } from 'framer-motion'

import { getAllPokemon, getPokemon } from '../../services/pokemon'

const Index = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const initialUrl = 'https://pokeapi.co/api/v2/pokemon/'

    useEffect(()=> {
        async function fetchData() {
            let response = await getAllPokemon(initialUrl);
            setNextUrl(response.next);
            setPrevUrl(response.previous);
            await loadingPokemon(response.results);
            setLoading(false);
        }
        fetchData();
    }, []);

    const loadingPokemon = async (data) => {
        let _pokemonData = await Promise.all(data.map(async pokemon => {
            let pokemonRecord = await getPokemon(pokemon.url);
            return pokemonRecord;
        }))

        setPokemonData(_pokemonData);
    }

    const next = async () => {
        setLoading(true);
        let data = await getAllPokemon(nextUrl)
        await loadingPokemon(data.results)
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false)
    }

    const prev = async () => {
        if(!prevUrl) return;

        setLoading(true);
        let data = await getAllPokemon(prevUrl)
        await loadingPokemon(data.results)
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >

            <div>
                <div className="btn">
                    <button className="btn-style" onClick={prev}>Prev</button>
                    <button className="btn-style" onClick={next}>Next</button>
                </div>
                { loading ? <h1>Loading. . .</h1> : (
                    <>
                        {pokemonData.map((pokemon, i) => {
                            return <PokeCard key={i} pokemon={pokemon} />
                        })}
                    </>
                ) }
            </div>

        </motion.div>
    )
}

export default Index
