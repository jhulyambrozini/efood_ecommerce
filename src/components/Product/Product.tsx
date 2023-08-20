import Button from "../Button/Button"
import food from '../../assets/images/image-3.png'
import { CardContainer } from "./styles"

const Product = () => (
  <CardContainer>
    <img src={food} alt="" />
    <h3>Pizza Marguerita</h3>
    <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
    <Button
      type="button"
      title="Adicionar ao carrinho"
      background="secundary" />
  </CardContainer>
)

export default Product