import { useDispatch, useSelector } from 'react-redux'

import Button from '../ui/Button/Button'

import * as Styles from './styles'
import trashIcon from '../../assets/images/trash.png'
import { calculeTotalPrice, formatPrice } from '../../utils'

import { RootReducer } from '../../store'
import { removeOfCart } from '../../store/reducers/cart'
import { changeComponent } from '../../store/reducers/sideBar'

const Cart = () => {
  const { itemsCart } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const goToForm = () => dispatch(changeComponent('form'))

  return (
    <>
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
            background="secundary"
            type="button"
            onClick={goToForm}
          >
            Continuar com a entrega
          </Button>
        </>
      ) : (
        <p className="empty-text">
          O carrinho está vazio, dicione ao menos um item para continuar com a
          compra
        </p>
      )}
    </>
  )
}

export default Cart
