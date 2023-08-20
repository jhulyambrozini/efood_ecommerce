import styled from "styled-components"
import backgroundHeader from '../../assets/images/background-header.png'
import { breakpoints, colors } from "../../styles"

export const HeaderContainer = styled.header`
  background-image: url(${backgroundHeader});
  background-repeat: no-repeat;
  background-size: cover;
  height: 11.625rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  span {
    color: ${colors.primaryDark};
    text-align: center;
    font-size: 1.125rem;
    font-weight: 900;
  }

  @media (max-width: ${breakpoints.mobile}){
    display: grid;
  }
`
