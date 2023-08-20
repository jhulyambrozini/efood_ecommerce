import styled from "styled-components";
import { colors } from "../../styles";
import { Logo } from "../Header/styles";

export const FooterContainer = styled.footer`
  width: 100vw;
  background-color: ${colors.primaryLight};
  text-align: center;

  ${Logo} {
    margin-top: 2.5rem;
    margin-bottom: 2rem;
  }

  p {
    color: ${colors.primaryDark};
    font-size: 0.625rem;
  }

`

export const SocialMedia = styled.div`
  display: flex;
  gap: .5rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;

  img {
    width: 1.5rem;
    height: 1.5rem;
 }
`
