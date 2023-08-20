import styled from "styled-components"

export const Image = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  height: 17.5rem;
  width: 100%;
  display: block;
  position: relative;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.5;
  }
`

export const Titles = styled.div`
  z-index: 1;
  position: relative;
  display: grid;
  gap: 9.78rem;
  color: #FFF;
  font-size: 2rem;
  padding: 1.5rem 0 2rem 10.68rem;

  span {
    font-weight: 100;
  }

  h2 {
    font-weight: 900;
  }
`