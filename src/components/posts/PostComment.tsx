import styled from 'styled-components'
import { withInjectedProps } from '../../hoc/withInjectedProps'

type PostCommentProps = {
  email: string
  body: string
}

const PostComment = ({ email, body }: PostCommentProps) => {
  return (
    <Comment>
      <CommentBody>{body}</CommentBody>
      <CommentAuthor>by {email}</CommentAuthor>
    </Comment>
  )
}

const Comment = styled.div`
  background-color: #e2e8f0;
  border-radius: 2px;
  padding: 5px 15px;
`

const CommentBody = styled.p`
  min-height: 40px;
`
const CommentAuthor = styled.p`
  font-size: 14px;
  margin-top: 12px;
`

export default withInjectedProps(PostComment)
