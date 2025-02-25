import { URL_POKEAPI,URL_POKEMONS,URL_TYPES } from '../constants';

export const searchPokemons = async ({ search,filter }) => {
    if(filter>0){
        try {
            const response = await fetch(`${URL_TYPES}${filter}`)
            const json = await response.json()
            const pokemons = json.pokemon
            
            return pokemons?.slice(0, 20).map(pokemon => ({
                id: pokemon.pokemon.url.split("/").slice(-2, -1)[0],
                name: pokemon.pokemon.name
            }))
        }catch (e) {
            return null
        }
    }else{
        if(search == ''){
            try {
                const response = await fetch(URL_POKEMONS)
                const json = await response.json()
                const pokemons = json.results
        
                return pokemons?.map(pokemon => ({
                    id: pokemon.url.split("/").slice(-2, -1)[0],
                    name: pokemon.name
                }))
            }catch (e) {
                return null
            } 
        }else{
            try {
                const response = await fetch(`${URL_POKEAPI}${search.toLowerCase()}`)
                const json = await response.json()
        
                return [{
                    id: json.id,  
                    name: json.name
                }];
            }catch (e) {
                return null
            }
        }    
    }
}
