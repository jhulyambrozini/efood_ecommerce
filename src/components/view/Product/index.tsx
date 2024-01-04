import { useDispatch } from 'react-redux'

import Button from '../../ui/Button'

import { ProductContainer } from './styles'
import { formatDescription } from '../../../utils'
import Image from '../../../utils/Image'

import { openModal, setFood } from '../../../store/reducers/modal'

export type ProductProps = {
  food: Menu
}

const Product = ({ food }: ProductProps) => {
  const dispatch = useDispatch()

  const toOpenModal = (food: Menu) => {
    dispatch(openModal())
    dispatch(setFood(food))
  }

  const description = formatDescription(food.descricao)

  return (
    <ProductContainer>
      <Image src={food.foto} alt={food.nome} />
      <h3>{food.nome}</h3>
      <p>{description}</p>
      <Button
        type="button"
        title="Mais detalhes"
        label="Mais detalhes"
        background="secundary"
        onClick={() => toOpenModal(food)}
      />
    </ProductContainer>
  )
}

export default Product
