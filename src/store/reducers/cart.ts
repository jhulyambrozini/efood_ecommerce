import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartState = {
  itemsCart: Menu[],
  cartIsOpen: boolean
}

const initialState: CartState = {
  itemsCart: [],
  cartIsOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Menu>) => {
      const restaurant = state.itemsCart.find(item => item.id === action.payload.id)

      if(!restaurant) {
        state.itemsCart.push(action.payload)
      } else {
        alert('A comida já estar no carrinho')
      }
    },
    removeOfCart: (state, action: PayloadAction<number>) => {
      state.itemsCart = state.itemsCart.filter(item => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.itemsCart = []
    },
    openCart: (state) => {
      state.cartIsOpen = true
    },
    closeCart: (state) => {
      state.cartIsOpen = false
    }
  }
})

export default cartSlice.reducer
export const {addToCart, clearCart, closeCart, openCart,removeOfCart } = cartSlice.actions
