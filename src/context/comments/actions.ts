import { CommentAction, Comment } from './types'

export const saveComments = (data: Comment[]): CommentAction => ({
  type: 'SAVE_COMMENTS',
  payload: data,
})

export const clearComments = (): CommentAction => ({
  type: 'CLEAR_COMMENTS',
})

export const setCommentsError = (msg: string): CommentAction => ({
  type: 'SET_COMMENTS_ERROR',
  payload: msg,
})

export const setCommentsLoading = (): CommentAction => ({
  type: 'SET_COMMENTS_LOADING',
})
