import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const CardContainer = styled.div`
  width: 29.5rem;
  height: 24.875rem;
  border: 1px solid ${colors.primaryDark};
  background: #fff;
  position: relative;

  ${ButtonContainer} {
    padding: 0.25rem 0.37rem;
    margin-left: 0.5rem;
  }

  .tags {
    display: flex;
    gap: 0.5rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  > img {
    width: 100%;
    height: 13.5rem;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 25rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 20rem;
    height: 26rem;
  }
`

export const Infos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;

  div {
    display: flex;
    justify-content: center;
    gap: 0.5rem;

    span {
      color: ${colors.primaryDark};
      font-size: 1.125rem;
      font-weight: 700;
    }

    img {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`

export const Title = styled.h3`
  color: ${colors.primaryDark};
  font-size: 1.125rem;
  font-weight: 700;
`

export const Desc = styled.p`
  color: ${colors.primaryDark};
  font-size: 0.875rem;
  line-height: 1.3rem;
  padding: 0.5rem 0.5rem;
`
