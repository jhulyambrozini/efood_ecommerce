import {
  Middleware,
  PreloadedState,
  combineReducers,
  configureStore
} from '@reduxjs/toolkit'
import api from '../services/api'
import cartReducer from './reducers/cart'
import sideBarReducer from './reducers/sideBar'
import formDeliveryReducer from './reducers/formDelivery'
import modalReducer from './reducers/modal'

const rootReducer = combineReducers({
  cart: cartReducer,
  sideBar: sideBarReducer,
  formDelivery: formDeliveryReducer,
  modal: modalReducer,
  api: api.reducer
})

export function configStore(preloadedState?: PreloadedState<RootState>) {
  const apiMiddleware: Middleware = api.middleware
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiMiddleware),
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configStore>
