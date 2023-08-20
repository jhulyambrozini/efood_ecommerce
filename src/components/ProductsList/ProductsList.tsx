import Product from "../Product/Product"
import { ListContainer } from "./styles"

const ProductsList = () => (
  <ListContainer className="container">
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
  </ListContainer>
)

export default ProductsList