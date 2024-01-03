import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type modalState = {
  isModalOpen: boolean
  product: Menu | undefined
}

const initialState: modalState = {
  isModalOpen: false,
  product: undefined
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true
    },
    closeModal: (state) => {
      state.isModalOpen = false
    },
    setProduct: (state, action: PayloadAction<Menu>) => {
      state.product = action.payload
    }
  }
})

export default modalSlice.reducer
export const { closeModal, openModal, setProduct } = modalSlice.actions
