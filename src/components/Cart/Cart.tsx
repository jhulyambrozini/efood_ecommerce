import Button from '../Button/Button'
import trashIcon from '../../assets/images/trash.png'
import * as Styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { formatPrice } from '../../utils'
import { close, remove } from '../../store/reducers/cart'
import Aside from '../Aside/Aside'
import { openForm } from '../../store/reducers/form'

const Cart = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const calculeTotalPrice = () => {
    return items.reduce((acc, currentValue) => {
      if (currentValue.preco) {
        return (acc += currentValue.preco)
      }
      return 0
    }, 0)
  }
  const goToForm = () => {
    dispatch(close())
    dispatch(openForm())
  }

  return (
    <Aside>
      {/* Carrinho */}
      {items.length > 0 ? (
        <>
          <ul>
            {items.map((item) => (
              <Styles.ItemList key={item.id}>
                <img src={item.foto} alt={item.nome} className="food-image" />
                <Styles.Infos>
                  <h4>{item.nome}</h4>
                  <span>{formatPrice(item.preco)}</span>
                </Styles.Infos>
                <Styles.ButtonTrash
                  onClick={() => dispatch(remove(item.id))}
                  title="Clique aqui para remover o item do carrinho"
                >
                  <img src={trashIcon} alt="icone de lixeira da cor rosa" />
                </Styles.ButtonTrash>
              </Styles.ItemList>
            ))}
          </ul>

          <Styles.TotalValue>
            <span>Valor Total</span>
            <span>{formatPrice(calculeTotalPrice())}</span>
          </Styles.TotalValue>

          <Button
            title="Clique aqui para continuar com a entrega"
            background="secundary"
            type="button"
            // onClick={goToForm}
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
    </Aside>
  )
}

export default Cart
