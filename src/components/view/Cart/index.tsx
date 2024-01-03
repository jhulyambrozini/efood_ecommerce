import { useSelector } from 'react-redux'

import FullCart from './FullCart'
import EmptyCart from './EmptyCart'

import { RootState } from '../../../store'

const Cart = () => {
  const { itemsCart } = useSelector((state: RootState) => state.cart)

  return <div>{itemsCart.length > 0 ? <FullCart /> : <EmptyCart />}</div>
}

export default Cart
