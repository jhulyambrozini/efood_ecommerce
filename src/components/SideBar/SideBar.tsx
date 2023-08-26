import { useDispatch, useSelector } from 'react-redux'

import Cart from '../Cart/Cart'
import Form from '../Form/Form'

import { Overlay } from '../../styles'
import { Container, AsideContainer, ButtonClose } from './styles'
import closeIcon from '../../assets/images/close.png'

import { changeComponent, closeSideBar } from '../../store/reducers/sideBar'
import { RootReducer } from '../../store'

const SideBar = () => {
  const dispatch = useDispatch()
  const { component } = useSelector((state: RootReducer) => state.sideBar)

  const switchComponents = () => {
    switch (component) {
      case 'cart':
        return <Cart />
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
      <Overlay onClick={toClose} />
      <AsideContainer>
        <ButtonClose
          onClick={toClose}
          title="Clique aqui para fechar a barra lateral"
        >
          <img src={closeIcon} alt="Icone de x, para fechar barra lateral" />
        </ButtonClose>

        {switchComponents()}
      </AsideContainer>
    </Container>
  )
}

export default SideBar
