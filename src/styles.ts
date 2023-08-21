import styled, { createGlobalStyle } from "styled-components"

export const colors = {
  primaryDark: '#E66767',
  primaryLight: '#FFEBD9',
  secundary: '#FFF8F2',
  grayDark: '#4B4B4B'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '426px'
}

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, san-serif;
    list-style: none;
 }

 body {
  background-color: ${colors.secundary};
 }
`
export default GlobalStyle

export const Logo = styled.img`
  width: 7.8rem;
  height: 3.6rem;
  cursor: pointer;
`
