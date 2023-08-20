import styled from "styled-components"
import { colors } from "../../styles"
import { ButtonContainer } from "../Button/styles"

export const CardContainer = styled.div`
  background-color: ${colors.primaryDark};
  width: 20rem;
  padding: 0.5rem;
  color: ${colors.primaryLight};

  img {
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