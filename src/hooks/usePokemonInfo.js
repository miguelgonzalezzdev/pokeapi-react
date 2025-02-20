import { useState,useEffect } from 'react'
import { fetchPokemonInfo } from "../services/fetchPokemonInfo";

export function usePokemonInfo ({ id }){
    const [pokemonInfo, setPokemonInfo] = useState({})

    useEffect(() => {
        if (!id) return;

        fetchPokemonInfo({ id })
            .then(newPokemonInfo => {
                setPokemonInfo(newPokemonInfo);
            });
    }, [id]);

    return { pokemonInfo,setPokemonInfo }
}