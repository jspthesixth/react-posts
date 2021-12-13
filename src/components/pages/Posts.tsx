import styled from 'styled-components'
import PostsList from '../posts/PostsList'

const Posts = () => {
  return (
    <PostsContainer>
      <PostsList />
    </PostsContainer>
  )
}

export default Posts

const PostsContainer = styled.div`
  margin-top: 100px;
`
