import { SearchAction } from './types'

export const setSearchOn = (): SearchAction => ({ type: 'SET_SEARCH_ON' })

export const setSearchOff = (): SearchAction => ({ type: 'SET_SEARCH_OFF' })

export const setSearchTerm = (text: string): SearchAction => ({
  type: 'SET_SEARCH_TERM',
  payload: text,
})

export const clearSearch = (): SearchAction => ({
  type: 'CLEAR_SEARCH',
})
