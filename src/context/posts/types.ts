import { ReactNode } from 'react'

export type PostProviderProps = {
  children: ReactNode
}

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export type TPostState = {
  loading: boolean
  posts: Post[]
  error: any
}

export interface PostContextModel {
  state: TPostState
  dispatch: React.Dispatch<PostAction>
}

export type PostAction =
  | { type: 'SAVE_POSTS'; payload: Post[] }
  | { type: 'CLEAR_POSTS' }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'SET_LOADING' }
