import styled from "styled-components"
import { breakpoints, colors } from "../../styles"
import { ButtonContainer } from "../Button/styles"

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  justify-content: center;
  padding: 2.5rem 10.7rem 7.5rem 10.7rem;
  align-items: center;

  @media (max-width: ${breakpoints.desktop}){
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.mobile}){
    grid-template-columns: 1fr;
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

  .overlay {
    position: absolute;
    top: o;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
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
 color: #FFF;
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
`
