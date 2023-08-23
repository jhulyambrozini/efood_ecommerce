import { styled } from "styled-components";
import { breakpoints } from "../../styles";

export const Container = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5rem;
  row-gap: 3rem;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.desktop}){
    max-width: 50%;
  }

  @media (max-width: ${breakpoints.mobile}){
    grid-template-columns: 1fr;
  }
`
