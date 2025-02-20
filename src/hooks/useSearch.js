import { useState, useEffect, useRef } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFisrtSearch = useRef(false)

  useEffect(() => {
    if(isFisrtSearch.current) {
      isFisrtSearch.current = search == '' //si search tiene algo, isFisrtSearch pasa a ser false
      return
    }

    if(search==='') {
      setError("Introduce un número o nombre de pokemon")
    }

    if(search.match(/^\d+$/)){
      setError('Introduce un texto válido')
      return
    }
    setError(null)
  }, [search])

  return { search, setSearch, error }
}
