import styled, { createGlobalStyle } from 'styled-components'

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

 .container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding-top: 5rem;
padding-bottom: 7.5rem;
 }
`
export default GlobalStyle

export const Logo = styled.img`
  width: 7.8rem;
  height: 3.6rem;
  cursor: pointer;
`
export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
`
export const ButtonAction = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;

  &:focus {
    outline: none;
    boder: none;
  }
`
