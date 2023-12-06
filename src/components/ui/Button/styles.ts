import styled from 'styled-components'
import { ButtonProps } from '.'
import { colors } from '../../../styles'

export const ButtonContainer = styled.button<Omit<ButtonProps, 'label'>>`
  color: ${(props) =>
    props.background === 'primary' ? colors.primaryLight : colors.primaryDark};
  background-color: ${(props) =>
    props.background === 'primary' ? colors.primaryDark : colors.primaryLight};
  border: none;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  padding: 0.5rem 0.5rem;

  &:hover {
    opacity: 0.8;
  }
`
