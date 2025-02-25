import { useState,useRef } from 'react'
import { searchPokemons } from '../services/searchPokemons'

export function usePokemons({ search, filter }) {
    const [pokemons, setPokemons] = useState([])
    const previousSearch = useRef({ search: null, filter: null })

    const getPokemons = async ({ search, filter }) => {
        if (search === previousSearch.current.search && filter === previousSearch.current.filter) return

        previousSearch.current = { search, filter };
        const newPokemons = await searchPokemons({ search,filter })
        setPokemons(newPokemons)
    }

    return { pokemons,setPokemons,getPokemons }
}
