import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import cartReducer from './reducers/cart'
import sideBarReducer from './reducers/sideBar'
import formReducer from './reducers/form'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    sideBar: sideBarReducer,
    form: formReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export default store
export type RootReducer = ReturnType<typeof store.getState>
