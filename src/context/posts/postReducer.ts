import { initialState } from './PostState'
import { TPostState, PostAction } from './types'

export const postReducer = (
  state: TPostState,
  action: PostAction
): TPostState => {
  switch (action.type) {
    case 'SAVE_POSTS':
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        loading: false,
      }
    case 'CLEAR_POSTS':
      return initialState
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}
