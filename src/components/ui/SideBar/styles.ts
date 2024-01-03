import styled from 'styled-components'
import { ButtonAction, colors } from '../../../styles'
import { ButtonContainer } from '../Button/styles'

export const SideBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  overflow: hidden;

  ${ButtonContainer} {
    width: 100%;
    padding: 0.25rem 0;
  }
`
export const AsideContainer = styled.aside`
  background-color: ${colors.primaryDark};
  z-index: 1;
  padding: 2rem 0.5rem 2rem 0.5rem;
  width: 22.5rem;
  overflow-y: scroll;
  position: relative;

  .empty-text {
    color: ${colors.primaryLight};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.375rem;
    text-align: center;
  }
`

export const ButtonClose = styled(ButtonAction)`
  right: 0;
  top: 0;
  width: 48px;
  height: 48px;
`
