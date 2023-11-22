import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { Logo } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.primaryLight};
  text-align: center;
  padding: 2.5rem 0;

  ${Logo} {
    margin-bottom: 2rem;
  }

  p {
    color: ${colors.primaryDark};
    font-size: 0.625rem;

    @media (max-width: ${breakpoints.mobile}) {
      padding: 0 2rem;
    }
  }
`

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;

  img {
    cursor: pointer;
}`
