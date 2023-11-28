import { useDispatch } from 'react-redux'
import { useState } from 'react'

import Button from '../ui/Button'

import * as Style from './styles'
import { Overlay } from '../../styles'

import closeIcon from '../../assets/images/close.png'

import { formatPrice, getDescription } from '../../utils'
import { addToCart } from '../../store/reducers/cart'
import { openSideBar } from '../../store/reducers/sideBar'
import Image from '../../utils/Image'

export type ProductsListProps = {
  foods: Restaurants
}

const ProductsList = ({ foods }: ProductsListProps) => {
  const [modal, setModal] = useState(false)
  const [product, setProduct] = useState<Menu>()
  const dispatch = useDispatch()

  const closeModal = () => setModal(false)
  const openModal = (products: Menu) => {
    setModal(true)
    setProduct(products)
  }

  const addItemToCart = () => {
    if (product) {
      dispatch(addToCart(product))
      closeModal()
      dispatch(openSideBar())
    } else {
      alert('Algo deu errado, tente novamente')
    }
  }

  return (
    <>
      <Style.ListContainer className="container">
        {foods.cardapio &&
          foods.cardapio.map((f) => (
            <li key={f.id}>
              <Style.CardContainer>
                <Image src={f.foto} alt={f.nome} />
                <h3>{f.nome}</h3>
                <p>{getDescription(f.descricao)}</p>
                <Button
                  type="button"
                  title="Mais detalhes"
                  label="Mais detalhes"
                  background="secundary"
                  onClick={() => openModal(f)}
                />
              </Style.CardContainer>
            </li>
          ))}
      </Style.ListContainer>

      {modal && (
        <Style.Modal>
          <Style.ModalContainer>
            <Image src={product?.foto} alt={product?.foto} />
            <Style.Infos>
              <h3>{product?.nome}</h3>
              <p>{product?.descricao}</p>
              <span>Serve: {product?.porcao}</span>
              <Button
                title="Adicionar ao carrinho"
                background="secundary"
                type="button"
                onClick={addItemToCart}
                label={`Adicionar ao carrinho - ${formatPrice(product?.preco)}`}
              />
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
