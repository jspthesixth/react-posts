import { useReducer } from 'react'
import { PostContext } from './postContext'
import { postReducer } from './postReducer'
import { PostProviderProps, TPostState } from './types'

export const initialState: TPostState = {
  loading: false,
  posts: [],
  error: null,
}

export const PostState = ({ children }: PostProviderProps) => {
  const [state, dispatch] = useReducer(postReducer, initialState)

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  )
}
