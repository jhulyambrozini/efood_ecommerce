import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { ButtonContainer } from '../ui/Button/styles'

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-content: center;
  align-items: center;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    max-width: 50%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    max-width: 50%;
  }
`

export const CardContainer = styled.div`
  background-color: ${colors.primaryDark};
  width: 20rem;
  padding: 0.5rem;
  color: ${colors.primaryLight};
  margin: 0;

  img {
    width: 100%;
    height: 10.4375rem;
    object-fit: cover;
  }

  h3 {
    padding: 0.5rem 0;
    font-size: 1rem;
    font-weight: 900;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.375rem;
    padding-bottom: 0.5rem;
  }

  ${ButtonContainer} {
    width: 100%;
    padding: 0.25rem 0;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContainer = styled.div`
  background-color: ${colors.primaryDark};
  width: 64rem;
  height: 21.5rem;
  padding: 2rem;
  display: flex;
  position: relative;
  z-index: 1;

  img {
    width: 17.5rem;
    height: 17.5rem;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 58rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 70%;
    height: auto;
    display: grid;
    padding: 1.8rem;

    img {
      width: 100%;
    }
  }
`
export const Close = styled.button`
  border: none;
  background: transparent;
  top: 0.5rem;
  right: 0.5rem;
  position: absolute;
  cursor: pointer;

  img {
    width: 1rem;
    height: 1rem;
  }
`

export const Infos = styled.div`
  color: #fff;
  margin-left: 1.4rem;
  display: grid;

  h3 {
    font-size: 1.125rem;
    font-weight: 900;
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.375rem;
    padding-bottom: 1rem;
  }

  ${ButtonContainer} {
    width: 13.625rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0;
    h3 {
      padding: 0.5rem 0;
    }

    ${ButtonContainer} {
      width: 100%;
      margin-top: 1rem;
      padding: 0.5rem;
    }
  }
`
