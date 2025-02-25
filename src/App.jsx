import { useState,useEffect } from 'react'
import pokeapiLogo from '/pokeapi.png'
import './App.css'
import { RenderPokemons } from './components/pokemons'
import { usePokemons } from './hooks/usePokemons'
import { useSearch } from './hooks/useSearch'

function App() {  
  const [filter, setFilter] = useState(0)
  const { search, setSearch, error } = useSearch()
  const { pokemons,setPokemons,getPokemons } = usePokemons({ search,filter })

  const handleSubmit = (event) => {
    event.preventDefault()
    getPokemons({ search,filter })
  }

  const handleSearch = (event) => {
    const newSearch = event.target.value
    setSearch( newSearch )
    setFilter(0)
    
  }

  const handleFilter = (event) => { 
    event.preventDefault()
    const newFilter = event.target.value
    setFilter(newFilter)
    setSearch('')
  }

  useEffect(() => {
    getPokemons({ search,filter })
  }, [search, filter])
  
  return (
    <div className='flex items-start flex-col place-items-center min-h-screen bg-red-800/[79%]'>
      <header className='flex items-center flex-col justify-center w-full gap-10 mt-10'>
        <img src={pokeapiLogo} alt="PokeApi logo" className='transition-all duration-300 hover:scale-110'/>
        <form onSubmit={handleSubmit} className='flex flex-wrap items-center justify-center text-center gap-10 w-full'> 
          <div className="relative max-w-2xl min-w-xs">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input onChange={handleSearch} name='search' className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50' placeholder='Pikachu, charmander, squirtle...'/>
            <button type='submit' className="text-white absolute end-2.5 bottom-2.5 bg-gray-500/[65%] hover:bg-gray-500/[85%] focus:outline-none font-medium rounded-lg text-sm px-4 py-2">Search</button>
          </div>
          <select onChange={handleFilter} name="filter" className="max-w-md min-w-2xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5"> 
            <option value="0" selected>Todos los tipos</option>
            <option value="1">Normal</option>
            <option value="2">Lucha</option>
            <option value="3">Volador</option>
            <option value="4">Veneno</option>
            <option value="5">Tierra</option>
            <option value="6">Roca</option>
            <option value="7">Bicho</option>
            <option value="8">Fantasma</option>
            <option value="9">Acero</option>
            <option value="10">Fuego</option>
            <option value="11">Agua</option>
            <option value="12">Planta</option>
            <option value="13">Electrico</option>
            <option value="14">Psíquico</option>
            <option value="15">Hielo</option>
            <option value="16">Dragon</option>
            <option value="17">Siniestro</option>
            <option value="18">Hada</option>
            <option value="19">Astral</option>
          </select>
        </form>
        {error && <p className='text-gray-50 font-bold text-md mt-10'>{error}</p>}
      </header>
      <main className='flex items-center flex-col justify-center w-full'>
          <RenderPokemons pokemons={pokemons} />
      </main>
    </div>
  )
}

export default App
