import styled from 'styled-components'

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem 5rem;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 426px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`
