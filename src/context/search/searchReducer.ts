import { initialState } from './SearchState'
import { TSearchState, SearchAction } from './types'

export const searchReducer = (
  state: TSearchState,
  action: SearchAction
): TSearchState => {
  switch (action.type) {
    case 'SET_SEARCH_ON':
      return {
        ...state,
        isSearching: true,
      }
    case 'SET_SEARCH_OFF':
      return {
        ...state,
        isSearching: false,
      }
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
      }
    case 'CLEAR_SEARCH':
      return initialState
    default:
      return state
  }
}
