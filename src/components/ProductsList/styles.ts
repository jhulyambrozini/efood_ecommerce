import styled from "styled-components"
import { breakpoints } from "../../styles"

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