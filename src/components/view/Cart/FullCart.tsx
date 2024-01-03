import { useDispatch, useSelector } from 'react-redux'

import Button from '../../ui/Button'

import * as Styles from './styles'
import trashIcon from '../../../assets/images/trash-icon.svg'
import { calculeTotalPrice, formatPrice } from '../../../utils'

import { RootState } from '../../../store'
import { removeOfCart } from '../../../store/reducers/cart'
import { changeComponent } from '../../../store/reducers/sideBar'

const FullCart = () => {
  const { itemsCart } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  return (
    <>
      <ul>
        {itemsCart.map((item) => (
          <Styles.ItemList key={item.id}>
            <img src={item.foto} alt={item.nome} className="food-image" />
            <Styles.Infos>
              <h4>{item.nome}</h4>
              <span>{formatPrice(item.preco)}</span>
            </Styles.Infos>
            <Styles.ButtonTrash
              onClick={() => dispatch(removeOfCart(item.id))}
              title="Remover o item do carrinho"
            >
              <img src={trashIcon} alt="icone de lixeira da cor rosa" />
            </Styles.ButtonTrash>
          </Styles.ItemList>
        ))}
      </ul>

      <Styles.TotalValue>
        <span>Valor Total</span>
        <span>{formatPrice(calculeTotalPrice(itemsCart))}</span>
      </Styles.TotalValue>

      <Button
        title="Continuar com a entrega"
        label="Continuar com a entrega"
        background="secundary"
        type="button"
        onClick={() => dispatch(changeComponent('form'))}
      />
    </>
  )
}

export default FullCart
