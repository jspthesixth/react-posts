import { initialState } from './CommentState'
import { TCommentState, CommentAction } from './types'

export const commentReducer = (
  state: TCommentState,
  action: CommentAction
): TCommentState => {
  switch (action.type) {
    case 'SAVE_COMMENTS':
      return {
        ...state,
        comments: [...state.comments, ...action.payload],
        loading: false,
      }
    case 'CLEAR_COMMENTS':
      return initialState
    case 'SET_COMMENTS_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    case 'SET_COMMENTS_LOADING':
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}
