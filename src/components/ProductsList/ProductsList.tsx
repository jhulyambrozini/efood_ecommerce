import { useState } from "react"
import Button from "../Button/Button"
import * as Style from "./styles"
import closeIcon from '../../assets/images/close.png'
import { formatPrice, getDescription } from "../../utils"
import { Overlay } from "../../styles"
import { useDispatch } from "react-redux"
import { add, open } from "../../store/reducers/cart"

type Props = {
  foods: Restaurants
}

const ProductsList = ({foods}: Props) => {
  const [modal, setModal] = useState(false)
  const [product, setProduct] = useState<Menu>()
  const dispatch = useDispatch()

  const closeModal = () => setModal(false)
  const openModal = (products: Menu) => {
    setModal(true)
    setProduct(products)
  }

  const addToCart = () => {
    if(product) {
      dispatch(add(product))
      closeModal()
      dispatch(open())
    } else {
      alert('Algo deu errado, tente novamente')
    }
  }

  return (
    <>
      <Style.ListContainer className="container">
        {foods.cardapio && foods.cardapio.map((f) => (
          <li key={f.id}>
              <Style.CardContainer>
                <img src={f.foto} alt={f.nome} />
                <h3>{f.nome}</h3>
                <p>{getDescription(f.descricao)}</p>
                <Button
                  type="button"
                  title="Clique aqui para adicionar ao carrinho"
                  background="secundary"
                  onClick={() => openModal(f)}
                >Adicionar ao carrinho</Button>
              </Style.CardContainer>
          </li>
        ))}
      </Style.ListContainer>

      {modal && (
        <Style.Modal>
          <Style.ModalContainer>
            <img src={product?.foto} alt={product?.foto} />
            <Style.Infos>
              <h3>{product?.nome}</h3>
              <p>{product?.descricao}</p>
              <span>Serve: {product?.porcao}</span>
              <Button title='Clique aqui para adicionar ao carrinho' background='secundary' type='button' onClick={addToCart}>Adicionar ao carrinho - {formatPrice(product?.preco)}</Button>
            </Style.Infos>
            <Style.Close onClick={closeModal}>
              <img src={closeIcon} alt="Icone de fechar" />
            </Style.Close>
          </Style.ModalContainer>
          <Overlay onClick={closeModal} />
        </Style.Modal>
      )}
    </>
  )
}

export default ProductsList
