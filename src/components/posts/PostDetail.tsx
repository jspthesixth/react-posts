import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { UserContext } from '../../context/users/usersContext'
import { CommentContext } from '../../context/comments/commentsContext'
import {
  saveComments,
  setCommentsLoading,
  setCommentsError,
} from '../../context/comments/actions'
import { Comment } from '../../context/comments/types'
import PostComment from './PostComment'
import Button from '../ui/Button'
import { withInjectedProps } from '../../hoc/withInjectedProps'

type PostDetailProps = {
  userId: number
  id: number
  title: string
  body: string
}

const PostDetail = ({ userId, id, title, body }: PostDetailProps) => {
  const {
    state: { comments },
    dispatch,
  } = useContext(CommentContext)

  const {
    state: { users },
  } = useContext(UserContext)

  const [isCommentsVisible, setIsCommentsVisible] = useState(false)

  const fetchComments = async (postId: number) => {
    dispatch(setCommentsLoading())
    try {
      const { data } = await axios.get<Comment[]>(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      )
      return dispatch(saveComments(data))
    } catch (error: unknown) {
      if (error instanceof Error) {
        return dispatch(setCommentsError(error.message))
      }
    }
  }

  const onClickHandle = () => {
    setIsCommentsVisible(prevState => !prevState)
    fetchComments(id)
  }

  return (
    <PostContainer>
      <PostHeader>
        <div>#{id}</div>
        <div>
          <Link to={`/post/${id}`}>Title: {title}</Link>
        </div>
        <div>by {users.find(({ id }) => id === userId)?.name}</div>
      </PostHeader>
      <PostBody>{body}</PostBody>
      {!isCommentsVisible && ( // once loaded, they can't be toggled
        <Button onClick={onClickHandle}>Show Comments</Button>
      )}
      {isCommentsVisible && (
        <PostComments>
          Comments:
          {comments
            .filter(({ postId }) => postId === id)
            .map(({ id, email, body }) => (
              <PostComment key={id} email={email} body={body} />
            ))}
        </PostComments>
      )}
    </PostContainer>
  )
}

const PostContainer = styled.div`
  margin-bottom: 20px;
  border-bottom: 2px solid #ccc;
`
const PostHeader = styled.div`
  padding: 12px 32px;
  background-color: #bae6fd;
  border-radius: 2px;
  display: flex;
  gap: 50px;
`

const PostBody = styled.div`
  max-height: 300px;
  padding: 20px;
  letter-spacing: -0.5px;
`

const PostComments = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0 30px 20px;
  letter-spacing: -0.5px;
`

export default withInjectedProps(PostDetail)
