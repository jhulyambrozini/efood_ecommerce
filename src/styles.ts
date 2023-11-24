import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  primaryDark: '#B13939',
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

 .loading {
    background: linear-gradient(90deg,  #FF8C8C 0px, #E66767 50%,  #FF8C8C 100%);
    background-size: 400%;
    animation: linear loading 1.5s infinite;
}


@keyframes loading {
  0% {
        background-position: 0%;
    }

    50% {
        background-position: 100%;
    }

    100% {
        background-position: 0%;
    }
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
    border: none;
  }
`
export const Skeleton = styled.div`
  height: 100%;
  background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
  background-color: #eee;
  background-size: 200%;
  animation: skeleton 1.5s infinite linear;

  @keyframes skeleton {
    from {
      background-position: 0px;
    }
    to {
      background-position: -200%;
    }
  }
`
