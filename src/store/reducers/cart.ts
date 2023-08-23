import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartState = {
  items: Menu[],
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Menu>) => {
      const restaurant = state.items.find(item => item.id === action.payload.id)

      if(!restaurant) {
        state.items.push(action.payload)
      } else {
        alert('A comida já estar no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    clear: (state) => {
      state.items = []
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export default cartSlice.reducer
export const {add, remove, clear, open, close} = cartSlice.actions
