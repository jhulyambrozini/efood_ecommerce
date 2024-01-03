import { useDispatch, useSelector } from 'react-redux'

import Button from '../../ui/Button'
import Modal from '../../ui/Modal'

import * as Style from './styles'

import { formatDescription } from '../../../utils'
import Image from '../../../utils/Image'

import { RootState } from '../../../store'
import { openModal, setProduct } from '../../../store/reducers/modal'

export type ProductsListProps = {
  foods: Restaurants
}

const ProductsList = ({ foods }: ProductsListProps) => {
  const { isModalOpen } = useSelector((state: RootState) => state.modal)
  const dispatch = useDispatch()

  const toOpenModal = (product: Menu) => {
    dispatch(openModal())
    dispatch(setProduct(product))
  }

  return (
    <>
      <Style.ListContainer className="container">
        {foods.cardapio &&
          foods.cardapio.map((food) => (
            <li key={food.id}>
              <Style.CardContainer>
                <Image src={food.foto} alt={food.nome} />
                <h3>{food.nome}</h3>
                <p>{formatDescription(food.descricao)}</p>
                <Button
                  type="button"
                  title="Mais detalhes"
                  label="Mais detalhes"
                  background="secundary"
                  onClick={() => toOpenModal(food)}
                />
              </Style.CardContainer>
            </li>
          ))}
      </Style.ListContainer>

      {isModalOpen && <Modal />}
    </>
  )
}

export default ProductsList
