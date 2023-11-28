import styled from 'styled-components'
import { colors } from '../../../styles'

export const FormContainer = styled.div`
  color: ${colors.primaryLight};
  font-weight: 700;

  h3 {
    font-size: 1rem;
    padding-bottom: 1rem;
  }

  .margin-bottom {
    margin-bottom: 1rem;
  }

  .flex {
    display: flex;
    justify-content: space-between;
  }

  .error {
    border: 2px solid red;
  }

  .controls {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  p {
    color: ${colors.primaryLight};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.375rem;
  }
`
