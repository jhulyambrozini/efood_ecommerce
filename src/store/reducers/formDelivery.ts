import { createSlice } from '@reduxjs/toolkit'

export type formDeliveryState = {
  isDeliveryOpen: boolean
}

const initialState: formDeliveryState = {
  isDeliveryOpen: true
}

const formDeliverySlice = createSlice({
  name: 'formDelivery',
  initialState,
  reducers: {
    openFormDelivery: (state) => {
      state.isDeliveryOpen = true
    },
    closeFormDelivery: (state) => {
      state.isDeliveryOpen = false
    }
  }
})

export default formDeliverySlice.reducer
export const { closeFormDelivery, openFormDelivery } = formDeliverySlice.actions
