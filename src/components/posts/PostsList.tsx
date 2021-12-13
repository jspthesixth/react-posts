import { useContext, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
import { PostContext } from '../../context/posts/postContext'
import { Post } from '../../context/posts/types'
import {
  savePosts,
  clearPosts,
  setError,
  setLoading,
} from '../../context/posts/actions'
import PostDetail from './PostDetail'
import { withInjectedProps } from '../../hoc/withInjectedProps'
import { User } from '../../context/users/types'
import {
  saveUsers,
  setUsersLoading,
  setUsersError,
} from '../../context/users/actions'
import { UserContext } from '../../context/users/usersContext'
import { SearchContext } from '../../context/search/searchContext'

const PostsList = () => {
  const location = useLocation()
  const { id: paramsId } = useParams()

  const {
    state: { posts },
    dispatch: postDispatch,
  } = useContext(PostContext)

  const {
    state: { users },
    dispatch: userDispatch,
  } = useContext(UserContext)

  const {
    state: { isSearching, searchTerm },
  } = useContext(SearchContext)

  const fetchPosts = async () => {
    postDispatch(setLoading())
    try {
      const { data } = await axios.get<Post[]>(
        'https://jsonplaceholder.typicode.com/posts'
      )
      return postDispatch(savePosts(data))
    } catch (error: unknown) {
      if (error instanceof Error) {
        return postDispatch(setError(error.message))
      }
    }
  }

  const fetchUsers = async () => {
    userDispatch(setUsersLoading())
    try {
      const { data } = await axios.get<User[]>(
        'https://jsonplaceholder.typicode.com/users'
      )
      return userDispatch(saveUsers(data))
    } catch (error: unknown) {
      if (error instanceof Error) {
        return userDispatch(setUsersError(error.message))
      }
    }
  }

  useEffect(() => {
    fetchPosts()
    fetchUsers()

    return () => postDispatch(clearPosts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getPropValuesMatch = (item: User) => JSON.stringify(item)

  const activeUser = isSearching
    ? users.find(user => getPropValuesMatch(user).includes(searchTerm))
    : null

  const assignPostData = (): Post[] => {
    if (location.pathname === '/posts') {
      if (activeUser) {
        return posts.filter(({ userId }) => userId === activeUser.id)
      }
    }

    if (location.pathname.includes('/post/')) {
      return posts.filter(({ id }) => id === +paramsId!)
    }
    return posts
  }

  const postsData = assignPostData()

  return (
    <div>
      {postsData.map(({ userId, id, title, body }) => (
        <PostDetail
          key={id}
          userId={userId}
          id={id}
          title={title}
          body={body}
        />
      ))}
    </div>
  )
}

export default withInjectedProps(PostsList)
