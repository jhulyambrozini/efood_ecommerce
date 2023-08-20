import styled from "styled-components"
import { Props } from "./Button"
import { colors } from "../../styles"

export const ButtonContainer = styled.button<Props>`
  color: ${(props) => props.background === 'primary' ? colors.primaryLight : colors.primaryDark };
  background-color:  ${(props) => props.background === 'primary' ? colors.primaryDark : colors.primaryLight };
  border: none;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;

`
