import { initialState } from './UserState'
import { TUserState, UserAction } from './types'

export const userReducer = (
  state: TUserState,
  action: UserAction
): TUserState => {
  switch (action.type) {
    case 'SAVE_USERS':
      return {
        ...state,
        users: [...state.users, ...action.payload],
        loading: false,
      }
    case 'CLEAR_USERS':
      return initialState
    case 'SET_USERS_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    case 'SET_USERS_LOADING':
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}
