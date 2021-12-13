import { useReducer } from 'react'
import { SearchContext } from './searchContext'
import { searchReducer } from './searchReducer'
import { SearchProviderProps, TSearchState } from './types'

export const initialState: TSearchState = {
  isSearching: false,
  searchTerm: '',
}

export const SearchState = ({ children }: SearchProviderProps) => {
  const [state, dispatch] = useReducer(searchReducer, initialState)

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  )
}
