import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const FormContainer = styled.div`
  color: ${colors.primaryLight};
  font-weight: 700;

  h3 {
    font-size: 1rem;
    padding-bottom: 1rem;
  }

  .margin-bottom {
    margin-bottom: 1.5rem;
  }

  .flex {
    display: flex;
    justify-content: space-between;
  }

  .error {
    input {
      border: 1px solid red;
    }
  }

  p {
    color: ${colors.primaryLight};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.375rem;
  }

  ${ButtonContainer} {
    margin-bottom: 0.5rem;
  }
`
