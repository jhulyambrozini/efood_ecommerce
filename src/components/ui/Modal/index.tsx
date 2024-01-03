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
  const { product } = useSelector((state: RootState) => state.modal)

  const addItemToCart = () => {
    if (product) {
      dispatch(addToCart(product))
      dispatch(closeModal())
      dispatch(openSideBar())
    } else {
      alert('Algo deu errado, tente novamente...')
    }
  }

  if (!product) return <span>Parece que não há um produto aqui :(</span>

  return (
    <Style.Modal>
      <Style.ModalContainer>
        <Image src={product.foto} alt={product.foto} />
        <Style.Infos>
          <h3>{product.nome}</h3>
          <p>{product.descricao}</p>
          <span>Serve: {product.porcao}</span>
          <Button
            title="Adicionar ao carrinho"
            background="secundary"
            type="button"
            onClick={addItemToCart}
            label={`Adicionar ao carrinho - ${formatPrice(product?.preco)}`}
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
