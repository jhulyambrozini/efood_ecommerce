import { useSelector } from 'react-redux'

import Modal from '../../ui/Modal'
import { ProductsListContainer } from './styles'

import { RootState } from '../../../store'
import Product from '../Product'

export type ProductsListProps = {
  foods: Restaurants
}

const ProductsList = ({ foods }: ProductsListProps) => {
  const { isModalOpen } = useSelector((state: RootState) => state.modal)

  return (
    <>
      <ProductsListContainer className="container">
        {foods.cardapio &&
          foods.cardapio.map((food) => (
            <li key={food.id}>
              <Product food={food} />
            </li>
          ))}
      </ProductsListContainer>

      {isModalOpen && <Modal />}
    </>
  )
}

export default ProductsList
