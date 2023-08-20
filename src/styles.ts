import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, san-serif;
 }
`
export default GlobalStyle

export const colors = {
  primaryDark: '#E66767',
  primaryLight: '#FFEBD9',
  secundary: '#FFF8F2',
  white: '#FFF',
  grayDark: '#4B4B4B'
}
