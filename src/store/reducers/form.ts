import { createSlice } from '@reduxjs/toolkit'

type FormState = {
  formIsOpen: boolean
}

const initialState: FormState = {
  formIsOpen: false
}

const sideBarSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    openForm: (state) => {
      state.formIsOpen = true
    },
    closeForm: (state) => {
      state.formIsOpen = false
    }
  }
})

export default sideBarSlice.reducer
export const { closeForm, openForm } = sideBarSlice.actions
