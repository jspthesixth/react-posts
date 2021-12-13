import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
  font-family:"Helvetica",sans-serif;
}

*,
*::after,
*::before { 
  margin:0;
  padding:0;
  box-sizing: border-box; 
}
`
