import { ReactNode } from 'react'

export type CommentProviderProps = {
  children: ReactNode
}

export type Comment = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export type TCommentState = {
  loading: boolean
  comments: Comment[]
  error: any //explicit any, change this...
}

export interface CommentContextModel {
  state: TCommentState
  dispatch: React.Dispatch<CommentAction>
}

export type CommentAction =
  | { type: 'SAVE_COMMENTS'; payload: Comment[] }
  | { type: 'CLEAR_COMMENTS' }
  | { type: 'SET_COMMENTS_ERROR'; payload: string }
  | { type: 'SET_COMMENTS_LOADING' }
