import { useDispatch, useSelector } from 'react-redux'

import Cart from '../../view/Cart'
import Form from '../../view/Form/FormContainer'

import { Overlay } from '../../../styles'
import * as Style from './styles'

import closeIcon from '../../../assets/images/close.png'

import { changeComponent, closeSideBar } from '../../../store/reducers/sideBar'
import { RootState } from '../../../store'
import { openFormDelivery } from '../../../store/reducers/formDelivery'

const SideBar = () => {
  const dispatch = useDispatch()
  const { component } = useSelector((state: RootState) => state.sideBar)

  const switchComponents = () => {
    if (component === 'cart') return <Cart />
    if (component === 'form') return <Form />
  }

  const toClose = () => {
    if (component === 'form') {
      dispatch(closeSideBar())
      dispatch(changeComponent('cart'))
      dispatch(openFormDelivery())
    } else {
      dispatch(closeSideBar())
    }
  }
  return (
    <Style.SideBarContainer>
      <Overlay onClick={toClose} role="overlay-container" />
      <Style.AsideContainer>
        <Style.ButtonClose onClick={toClose} title="Fechar carrinho">
          <img src={closeIcon} alt="Icone de fechar" />
        </Style.ButtonClose>

        {switchComponents()}
      </Style.AsideContainer>
    </Style.SideBarContainer>
  )
}

export default SideBar
