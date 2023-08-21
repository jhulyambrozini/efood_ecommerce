import Product from "../Product/Product"
import { Close, Infos, ListContainer, Modal, ModalContainer } from "./styles"
import closeIcon from '../../assets/images/close.png'
import food from '../../assets/images/image-3.png'
import Button from "../Button/Button"
import { useState } from "react"

const ProductsList = () => {
  const [modal, setModal] = useState(true)

  const closeModal = () => setModal(false)

  return (
    <>
      <ListContainer className="container">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ListContainer>

      {modal && (
        <Modal>
          <ModalContainer>
            <img src={food} alt="" />
            <Infos>
              <h3>Nome da comida</h3>
              <p>A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.</p>
              <span>Serve: de 2 a 3 pessoas</span>
              <Button title='Adicionar ao carrinho - R$ 60,90' background='secundary' type='button'/>
            </Infos>
            <Close onClick={closeModal}>
              <img src={closeIcon} alt="" />
            </Close>
          </ModalContainer>
          <div className="overlay" onClick={closeModal}></div>
        </Modal>
      )}
    </>
  )
}

export default ProductsList
