import { useState } from 'react';
import { usePokemonInfo } from '../hooks/usePokemonInfo';
import { ModalPokemonInfo } from './modalPokemonInfo';
import { IMAGES_URL } from '../constants';

export function PokemonCard ({id,name}){
    const [openModal,setOpenModal] = useState(false)
    const {pokemonInfo } = usePokemonInfo({ id })
    const pokemonNumber = id.toString().padStart(3, '0')
    const imgURL = pokemonInfo ? IMAGES_URL+pokemonNumber+".png" : ""

    const handleClick = () => {
        setOpenModal(true)
    }

    return (
        pokemonInfo 
          ? <>
                <div key={id} className="rounded-xl bg-gray-100 flex items-center flex-col justify-center gap-6 p-8 shadow-xl transition-all duration-300 hover:scale-107">
                    <p className="text-gray-500 font-bold text-lg flex justify-items-start w-full ">#{pokemonNumber}</p>    
                    <img src={imgURL} alt={`Imagen de ${pokemonInfo.name}`} />
                    <h2 className="font-bold text-3xl uppercase text-gray-600">{pokemonInfo.name}</h2>
                    <div className="flex items-center text-center flex-wrap gap-2">
                        <p className={`tag-type tag-${pokemonInfo.type1}`}>{pokemonInfo.type1}</p>
                        {pokemonInfo.type2 && <p className={`tag-type tag-${pokemonInfo.type2}`}>{pokemonInfo.type2}</p>}
                    </div>
                    <div>
                        <button type="button" onClick={handleClick} className="w-35 text-xl p-2 rounded-xl bg-gray-500/[65%] hover:bg-gray-500/[85%] text-gray-100 transition-all duration-400">Ver Más</button>
                    </div>
                
                </div> 
                <ModalPokemonInfo pokemon={pokemonInfo} isOpen={openModal} closeModal={() => {setOpenModal(false)}}/>
            </>        
          : <p>Cargando...</p>
    )
}

export function RenderPokemons ({pokemons}){
    const hasResults = pokemons && pokemons.length > 0
    
    return (
        hasResults 
            ?  <section key="pokemonList" className='my-15 max-w-7xl flex items-center justify-center flex-wrap gap-8 px-6'> 
                    {
                        pokemons.map(pokemon => (
                            <PokemonCard key={pokemon.id} id={pokemon.id} name={pokemon.name} />
                        ))
                    }
               </section>
            :  <NoPokemonsResult />    
    )
}

export function NoPokemonsResult (){
    return (
        <p className="my-15 font-bold text-xl">No se encontraron pokemons</p>
    )
}
