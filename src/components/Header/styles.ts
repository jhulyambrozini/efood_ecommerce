import styled from "styled-components";
import backgroundHeader from '../../assets/images/background-header.png'
import { colors } from "../../styles";

export const HeaderContainer = styled.header`
  background-image: url(${backgroundHeader});
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  height: 24rem;
  width: 100vw;

  h1 {
    line-height: 0;
  }

  h2 {
    color: ${colors.primaryDark};
    font-size: 2.25rem;
    font-weight: bold;
  }
`
export const Logo = styled.img`
  width: 7.8rem;
  height: 3.6rem;
  margin-top: 4rem;
  margin-bottom: 8.6rem;
`
