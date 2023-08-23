import { Overlay } from "../../styles";
import { AsideContainer, ButtonClose, Container } from "./style";
import closeIcon from '../../assets/images/close.png'
import { useDispatch } from "react-redux";
import { close } from '../../store/reducers/cart'

type Props = {
  children: JSX.Element
}


const Aside = ({children}: Props)  => {
const dispatch = useDispatch()

const closeCart = () => {
  dispatch(close())
}

  return (
    <Container>
        <Overlay onClick={closeCart}/>
        <AsideContainer>

          <ButtonClose onClick={closeCart} title='Clique aqui para fechar o modal'>
            <img src={closeIcon} alt="Icone de x, para fechar carrinho" />
          </ButtonClose>

          {children}

        </AsideContainer>
      </Container>
  )
}

export default Aside
