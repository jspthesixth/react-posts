import { ReactNode } from 'react'

export type UserProviderProps = {
  children: ReactNode
}

type Address = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: {
    lat: string
    lng: string
  }
}

export type User = {
  id: number
  name: string
  username: string
  email: string
  address: Address
}

export type TUserState = {
  loading: boolean
  users: User[]
  error: any
}

export interface UserContextModel {
  state: TUserState
  dispatch: React.Dispatch<UserAction>
}

export type UserAction =
  | { type: 'SAVE_USERS'; payload: User[] }
  | { type: 'CLEAR_USERS' }
  | { type: 'SET_USERS_ERROR'; payload: string }
  | { type: 'SET_USERS_LOADING' }
