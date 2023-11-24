import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../ui/Button/styles'

type InputGroupProps = {
  maxWidth?: string
}

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
    border: 2px solid red;
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

export const InputGroup = styled.div<InputGroupProps>`
  display: grid;
  margin-bottom: 0.5rem;

  label {
    font-size: 0.875rem;
    padding-bottom: 0.5rem;
  }

  input {
    padding: 0.5rem;
    color: #4b4b4b;
    font-size: 0.875rem;
    border: none;
    background-color: ${colors.primaryLight};
    border: 2px solid ${colors.primaryLight};
    max-width: ${(props) => props.maxWidth || 'auto'};
  }
`
