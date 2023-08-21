import { styled } from "styled-components";
import { breakpoints } from "../../styles";

export const Container = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5rem;
  row-gap: 3rem;
  align-items: center;
  justify-content: center;
  padding: 5rem 0 7.5rem 10.7rem;

  @media (max-width: ${breakpoints.tablet}){
    grid-template-columns: 1fr;
  }
`
