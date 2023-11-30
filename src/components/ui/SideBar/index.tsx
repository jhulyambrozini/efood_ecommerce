import { useDispatch, useSelector } from 'react-redux'

import Cart from '../../view/Cart'
import Form from '../../view/Form/Form'

import { Overlay } from '../../../styles'
import { Container, AsideContainer, ButtonClose } from './styles'

import closeIcon from '../../../assets/images/close.png'

import { changeComponent, closeSideBar } from '../../../store/reducers/sideBar'
import { RootState } from '../../../store'

const SideBar = () => {
  const dispatch = useDispatch()
  const { component } = useSelector((state: RootState) => state.sideBar)
  const { itemsCart } = useSelector((state: RootState) => state.cart)

  const switchComponents = () => {
    switch (component) {
      case 'cart':
        return <Cart itemsCart={itemsCart} />
      case 'form':
        return <Form />
      default:
        return null
    }
  }

  const toClose = () => {
    if (component === 'form') {
      dispatch(closeSideBar())
      dispatch(changeComponent('cart'))
    } else {
      dispatch(closeSideBar())
    }
  }
  return (
    <Container>
      <Overlay onClick={toClose} role="overlay-container" />
      <AsideContainer>
        <ButtonClose onClick={toClose} title="Fechar carrinho">
          <img src={closeIcon} alt="Icone de fechar" />
        </ButtonClose>

        {switchComponents()}
      </AsideContainer>
    </Container>
  )
}

export default SideBar
