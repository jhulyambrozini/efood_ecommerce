import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type modalState = {
  isModalOpen: boolean
  food: Menu | undefined
}

const initialState: modalState = {
  isModalOpen: false,
  food: undefined
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
    setFood: (state, action: PayloadAction<Menu>) => {
      state.food = action.payload
    }
  }
})

export default modalSlice.reducer
export const { closeModal, openModal, setFood } = modalSlice.actions
