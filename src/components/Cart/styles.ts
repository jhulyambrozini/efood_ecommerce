import styled from 'styled-components'
import { ButtonAction, colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'



export const ButtonTrash = styled(ButtonAction)`
  width: 1rem;
  height: 1rem;
  object-fit: cover;
  bottom: 0.5rem;
  right: 0.5rem;
`

export const ItemList = styled.li`
  background-color: ${colors.primaryLight};
  display: flex;
  padding: 0.5rem;
  position: relative;
  margin-top: 1rem;

  .food-image {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
  }
`
export const Infos = styled.div`
  color: ${colors.primaryDark};
  margin-left: 0.5rem;

  h4 {
    text-align: center;
    font-size: 1.125rem;
    font-weight: 900;
    padding-bottom: 1rem;
  }

  span {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.375rem;
  }
`

export const TotalValue = styled.div`
  color: ${colors.primaryLight};
  text-align: center;
  font-size: 0.875rem;
  font-weight: 700;
  padding-top: 2.5rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
`

