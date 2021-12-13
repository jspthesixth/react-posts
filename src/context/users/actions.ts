import { UserAction, User } from './types'

export const saveUsers = (data: User[]): UserAction => ({
  type: 'SAVE_USERS',
  payload: data,
})

export const clearUsers = (): UserAction => ({
  type: 'CLEAR_USERS',
})

export const setUsersError = (msg: string): UserAction => ({
  type: 'SET_USERS_ERROR',
  payload: msg,
})

export const setUsersLoading = (): UserAction => ({
  type: 'SET_USERS_LOADING',
})
