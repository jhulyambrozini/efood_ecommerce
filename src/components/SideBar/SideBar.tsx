import { useDispatch, useSelector } from 'react-redux'

import FinishOrder from '../Form/FinishOrder'
import Cart from '../Cart/Cart'
import Form from '../Form/Form'

import { Overlay } from '../../styles'
import { Container, AsideContainer, ButtonClose } from './styles'
import closeIcon from '../../assets/images/close.png'

import { changeComponent, closeSideBar } from '../../store/reducers/sideBar'
import { RootReducer } from '../../store'
import { clearCart } from '../../store/reducers/cart'

const SideBar = () => {
  const dispatch = useDispatch()
  const { component} = useSelector((state: RootReducer) => state.sideBar)

  const switchComponents = () => {
    switch (component){
      case 'cart':
        return <Cart />
      case 'form':
        return <Form />
      case 'finishOrder':
        return <FinishOrder />
      default:
        return null
    }
  }

  const toClose = () => {
    if(component === 'finishOrder') {
      dispatch(closeSideBar())
      dispatch(changeComponent('cart'))
      dispatch(clearCart())
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
