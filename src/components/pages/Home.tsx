import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button'

const Home = () => {
  const navigate = useNavigate()

  const onClickHandle = () => {
    navigate('/posts')
  }

  return (
    <HomeContainer>
      <Button onClick={onClickHandle}>Go to posts</Button>
    </HomeContainer>
  )
}

export default Home

const HomeContainer = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
`
