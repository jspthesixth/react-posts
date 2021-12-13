import { ReactNode } from 'react'
import styled from 'styled-components'
import { withInjectedProps } from '../../hoc/withInjectedProps'

type ButtonProps = {
  onClick: () => void
  children: ReactNode
}

const Button = ({ onClick, children }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

const StyledButton = styled.button`
  max-height: 56px;
  padding: 18px 32px;
  color: #fff;
  background-color: #38bdf8;
  outline: none;
  box-shadow: none;
  border: none;
  border-radius: 4px;
  display: inline-block;
  vertical-align: middle;
  border-bottom: 2.5px solid #0284c7;
  letter-spacing: -0.4px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  margin-bottom: 24px;

  &:hover {
    background-color: #0284c7;
  }
`

export default withInjectedProps(Button)
