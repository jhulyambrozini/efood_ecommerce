import { useDispatch } from 'react-redux'

import Button from '../../ui/Button'

import * as Styles from './styles'
import trashIcon from '../../assets/images/trash-icon.svg'
import { calculeTotalPrice, formatPrice } from '../../../utils'

import { removeOfCart } from '../../../store/reducers/cart'
import { changeComponent } from '../../../store/reducers/sideBar'

export type CartProps = {
  itemsCart: Menu[]
}

const Cart = ({ itemsCart }: CartProps) => {
  const dispatch = useDispatch()

  return (
    <div>
      {itemsCart.length > 0 ? (
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
      ) : (
        <p className="empty-text" style={{ color: '#ffff' }}>
          O carrinho está vazio, dicione ao menos um item para continuar com a
          compra.
        </p>
      )}
    </div>
  )
}

export default Cart
