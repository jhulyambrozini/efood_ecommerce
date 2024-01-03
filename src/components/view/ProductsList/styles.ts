import styled from 'styled-components'
import { breakpoints } from '../../../styles'

export const ProductsListContainer = styled.ul`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;

  @media only screen and (max-width: ${breakpoints.desktop}) {
    padding-left: 24px;
    padding-right: 24px;
    justify-content: center;
  }
`
