import styled from 'styled-components'
import { Logo, breakpoints, colors } from '../../styles'
import backgroundHeader from '../../assets/images/background-header.png'

export const HeaderContainer = styled.header`
  background-image: url(${backgroundHeader});
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  height: 24rem;
  width: 100%;

  h1 {
    line-height: 0;
  }

  ${Logo} {
    margin-top: 4rem;
    margin-bottom: 8.6rem;
  }

  h2 {
    color: ${colors.primaryDark};
    font-size: 2.25rem;
    font-weight: 900;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 1.8rem;
    }
  }
`
