import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type sideBarState = {
  sideBarIsOpen: boolean
  component: string
}

const initialState: sideBarState = {
  sideBarIsOpen: false,
  component: 'cart'
}

const sideBarSlice = createSlice({
  name: 'sideBar',
  initialState,
  reducers: {
    openSideBar: (state) => {
      state.sideBarIsOpen = true
    },
    closeSideBar: (state) => {
      state.sideBarIsOpen = false
    },
    changeComponent: (state, action: PayloadAction<string>) => {
      state.component = action.payload
    }
  }
})

export default sideBarSlice.reducer
export const { closeSideBar, openSideBar, changeComponent } =
  sideBarSlice.actions
