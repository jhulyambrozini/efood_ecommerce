import { createSlice } from "@reduxjs/toolkit";
type FormState = {
  formIsOpen: boolean
}
const initialState: FormState = {
  formIsOpen: false
}
const formSlice = createSlice({
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

export default formSlice.reducer
export const { closeForm, openForm} = formSlice.actions
