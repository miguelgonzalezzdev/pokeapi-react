import { IMAGES_URL } from '../constants';

export function ModalPokemonInfo ({ pokemon,isOpen,closeModal }) {
    if(!isOpen) return null

    const pokemonNumber = pokemon.id.toString().padStart(3, '0')
    const imgURL = pokemon ? IMAGES_URL+pokemonNumber+".png" : ""

    const handleClick = () => {
        closeModal()
    }

    return (
        <div className="fixed inset-0 w-screen h-screen grid place-items-center backdrop-brightness-35">
            <div className="w-4xl h-4xl bg-gray-100 mx-10 p-8 rounded-xl shadow-2xl flex flex items-center flex-col justify-center gap-6">
                <div className="flex justify-between w-full items-center">
                    <p className="text-gray-500 font-bold text-2xl flex justify-items-start w-full ">#{pokemonNumber}</p>
                    <button type="button" onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 text-gray-500 hover:text-gray-700 hover:scale-105">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-8 w-full">
                    <div className="flex justify-center items-center flex-col gap-6">
                        <h2 className="font-bold text-3xl uppercase text-gray-600">{pokemon.name}</h2>
                        <img src={imgURL} alt={`Imagen de ${pokemon.name}`} />
                        <div className="flex items-center text-center flex-wrap gap-2">
                            <p className={`tag-type tag-${pokemon.type1}`}>{pokemon.type1}</p>
                            {pokemon.type2 && <p className={`tag-type tag-${pokemon.type2}`}>{pokemon.type2}</p>}
                        </div>
                        <div className="flex justify-center items-center gap-4">
                            <p className="text-gray-500 font-bold">Altura: <span className="text-gray-600">{pokemon.height}m</span></p>
                            <p className="text-gray-500 font-bold">Peso: <span className="text-gray-600">{pokemon.weight}kg</span></p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                        <h2 className="font-bold text-3xl uppercase text-gray-600">Estadísticas base</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
