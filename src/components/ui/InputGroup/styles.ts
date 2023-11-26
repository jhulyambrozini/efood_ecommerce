import styled from 'styled-components'
import { colors } from '../../../styles'

type InputGroupProps = {
  maxWidth?: string
}

export const InputGroupContainer = styled.div<InputGroupProps>`
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

  small {
    margin-top: 0.3rem;
    height: 18px;
  }
`
