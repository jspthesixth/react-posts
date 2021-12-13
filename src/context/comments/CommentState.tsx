import { useReducer } from 'react'
import { CommentContext } from './commentsContext'
import { commentReducer } from './commentsReducer'
import { CommentProviderProps, TCommentState } from './types'

export const initialState: TCommentState = {
  loading: false,
  comments: [],
  error: null,
}

export const CommentState = ({ children }: CommentProviderProps) => {
  const [state, dispatch] = useReducer(commentReducer, initialState)

  return (
    <CommentContext.Provider value={{ state, dispatch }}>
      {children}
    </CommentContext.Provider>
  )
}
