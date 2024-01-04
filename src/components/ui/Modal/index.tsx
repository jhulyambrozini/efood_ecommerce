import { useDispatch, useSelector } from 'react-redux'
import { Overlay } from '../../../styles'
import { formatPrice } from '../../../utils'
import Button from '../Button'
import * as Style from './styles'
import { closeModal } from '../../../store/reducers/modal'
import closeIcon from '../../../assets/images/close.png'
import Image from '../../../utils/Image'
import { openSideBar } from '../../../store/reducers/sideBar'
import { addToCart } from '../../../store/reducers/cart'
import { RootState } from '../../../store'

const Modal = () => {
  const dispatch = useDispatch()
  const { food } = useSelector((state: RootState) => state.modal)

  const addItemToCart = () => {
    if (food) {
      dispatch(addToCart(food))
      dispatch(closeModal())
      dispatch(openSideBar())
    } else {
      alert('Algo deu errado, tente novamente...')
    }
  }

  if (!food) return <span>Parece que não há um produto aqui :(</span>

  return (
    <Style.Modal>
      <Style.ModalContainer>
        <Image src={food.foto} alt={food.nome} />
        <Style.Infos>
          <h3>{food.nome}</h3>
          <p>{food.descricao}</p>
          <span>Serve: {food.porcao}</span>
          <Button
            title="Adicionar ao carrinho"
            background="secundary"
            type="button"
            onClick={addItemToCart}
            label={`Adicionar ao carrinho - ${formatPrice(food?.preco)}`}
          />
        </Style.Infos>
        <Style.Close onClick={() => dispatch(closeModal())}>
          <img src={closeIcon} alt="Icone de fechar" />
        </Style.Close>
      </Style.ModalContainer>
      <Overlay onClick={() => dispatch(closeModal())} />
    </Style.Modal>
  )
}

export default Modal
