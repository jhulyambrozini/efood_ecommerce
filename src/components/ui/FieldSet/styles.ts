import styled from 'styled-components'
import { colors } from '../../../styles'

type FieldSetContainerProps = {
  maxwidth?: string
}

export const FieldSetContainer = styled.div<FieldSetContainerProps>`
  display: grid;
  margin-bottom: 0.5rem;

  label {
    font-size: 0.875rem;
    padding-bottom: 0.5rem;
    color: #ffff;
  }

  input {
    padding: 0.5rem;
    color: #4b4b4b;
    font-size: 0.875rem;
    border: none;
    background-color: ${colors.primaryLight};
    border: 2px solid ${colors.primaryLight};
    max-width: ${(props) => props.maxwidth || 'auto'};
  }

  span {
    margin-top: 0.3rem;
    height: 18px;
    font-size: 12px;
    font-weight: 400;
  }
`
