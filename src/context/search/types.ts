import { ReactNode } from 'react'

export type SearchProviderProps = {
  children: ReactNode
}

export type TSearchState = {
  isSearching: boolean
  searchTerm: string
}

export interface SearchContextModel {
  state: TSearchState
  dispatch: React.Dispatch<SearchAction>
}

export type SearchAction =
  | { type: 'SET_SEARCH_ON' }
  | { type: 'SET_SEARCH_OFF' }
  | { type: 'SET_SEARCH_TERM'; payload: string }
  | { type: 'CLEAR_SEARCH' }
