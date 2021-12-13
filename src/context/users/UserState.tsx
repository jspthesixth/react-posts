import { useReducer } from 'react'
import { UserContext } from './usersContext'
import { userReducer } from './usersReducer'
import { UserProviderProps, TUserState } from './types'

export const initialState: TUserState = {
  loading: false,
  users: [],
  error: null,
}

export const UserState = ({ children }: UserProviderProps) => {
  const [state, dispatch] = useReducer(userReducer, initialState)

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}
