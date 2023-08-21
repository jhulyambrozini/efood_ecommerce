import { useState } from "react"
import Button from "../Button/Button"
import * as Style from "./styles"
import closeIcon from '../../assets/images/close.png'
import { getDescription } from "../../utils"

type Props = {
  foods: Restaurants
}

const ProductsList = ({foods}: Props) => {
  const [modal, setModal] = useState(false)
  const [product, setProduct] = useState<Menu>()

  const closeModal = () => setModal(false)
  const openModal = (products: Menu) => {
    setModal(true)
    setProduct(products)
  }

  const formatPrice = (price = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
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
                  title="Adicionar ao carrinho"
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
            <img src={product?.foto} alt={product?.foto} />
            <Style.Infos>
              <h3>{product?.nome}</h3>
              <p>{product?.descricao}</p>
              <span>Serve: de {product?.porcao}</span>
              <Button title={`Adicionar ao carrinho - ${formatPrice(product?.preco)}`} background='secundary' type='button'/>
            </Style.Infos>
            <Style.Close onClick={closeModal}>
              <img src={closeIcon} alt="Icone de fechar" />
            </Style.Close>
          </Style.ModalContainer>
          <div className="overlay" onClick={closeModal}></div>
        </Style.Modal>
      )}
    </>
  )
}

export default ProductsList
