import styled, { createGlobalStyle } from "styled-components"

export const colors = {
  primaryDark: '#E66767',
  primaryLight: '#FFEBD9',
  secundary: '#FFF8F2',
  white: '#FFF',
  grayDark: '#4B4B4B'
}

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, san-serif;
 }

 body {
  background-color: ${colors.secundary};
 }

`
export default GlobalStyle

export const Logo = styled.img`
  width: 7.8rem;
  height: 3.6rem;

`
