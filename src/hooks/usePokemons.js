import { useState } from 'react'
import { searchPokemons } from '../services/searchPokemons'

export function usePokemons({ search }) {
    const [pokemons, setPokemons] = useState([])

    const getPokemons = async () => {
        const newPokemons = await searchPokemons({ search })
        setPokemons(newPokemons)
    }

    return { pokemons,setPokemons,getPokemons }
}
