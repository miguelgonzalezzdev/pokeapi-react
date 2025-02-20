import { useEffect } from 'react'
import pokeapiLogo from '/pokeapi.png'
import './App.css'
import { RenderPokemons } from './components/pokemons'
import { usePokemons } from './hooks/usePokemons'
import { useSearch } from './hooks/useSearch'

function App() {  
  const { search, setSearch, error } = useSearch()
  const { pokemons,setPokemons,getPokemons } = usePokemons({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    getPokemons({ search })
  }

  const handleSearch = (event) => {
    const newSearch = event.target.value
    setSearch( newSearch )
  }

  useEffect(() => {
    getPokemons({ search })
  }, [])
  
  return (
    <div className='flex items-center flex-col justify-center min-h-screen bg-red-800/[79%]'>
      <header className='flex items-center justify-center w-full h-24 mb-14'>
        <img src={pokeapiLogo} alt="PokeApi logo"/>
      </header>
      <main className='flex items-center flex-col justify-center w-full mx-20'>
        <form onSubmit={handleSubmit} className='flex items-center justify-center flex-col text-center'> 
          <div className='flex items-center flex-row justify-center text-center p-1 w-xs lg:w-sm rounded-4xl bg-gray-100'>
            <input onChange={handleSearch} name='search' className='p-2 w-sm focus:outline-none' type="text" placeholder='Pikachu, charmander, squirtle...'/>
            <button type="submit" className='pl-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
          </div>
          {error && <p className='text-neutral-900 font-bold text-md mt-10'>{error}</p>}
        </form>
          <RenderPokemons pokemons={pokemons} />
      </main>
    </div>
  )
}

export default App
