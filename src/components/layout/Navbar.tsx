import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Search from './Search'
import { withInjectedProps } from '../../hoc/withInjectedProps'

const Navbar = () => {
  const location = useLocation()
  return (
    <NavContainer>
      <Logo>Posts app</Logo>
      {location.pathname.includes('/posts') && <Search />}
    </NavContainer>
  )
}

const Logo = styled.div`
  font-size: 30px;
  text-transform: uppercase;
  letter-spacing: -2px;
  word-spacing: 3px;
`

const NavContainer = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 15px;
  z-index: 100;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
`
export default withInjectedProps(Navbar)
