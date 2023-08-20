import { styled } from "styled-components";
import { breakpoints } from "../../styles";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5rem;
  row-gap: 3rem;
  align-items: center;
  justify-content: center;
  padding: 5rem 10.7rem 7.5rem 10.7rem;

  @media (max-width: ${breakpoints.desktop}){
    grid-template-columns: 1fr;
  }
`
