import styled from "styled-components"
import { breakpoints, colors } from "../../styles"
import { Logo } from "../../styles"

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

    @media (max-width: ${breakpoints.mobile}){
      padding: 0 2rem;
    }
  }
`

export const SocialMedia = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;

  img {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;

    @media (max-width: ${breakpoints.mobile}){
      width: 2rem;
      height: 2rem;
    }
 }
`
