import { PostAction, Post } from './types'

export const savePosts = (data: Post[]): PostAction => ({
  type: 'SAVE_POSTS',
  payload: data,
})

export const clearPosts = (): PostAction => ({
  type: 'CLEAR_POSTS',
})

export const setError = (msg: string): PostAction => ({
  type: 'SET_ERROR',
  payload: msg,
})

export const setLoading = (): PostAction => ({ type: 'SET_LOADING' })
