import {
  Middleware,
  PreloadedState,
  combineReducers,
  configureStore
} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist'

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

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export function configStore(preloadedState?: PreloadedState<RootState>) {
  const apiMiddleware: Middleware = api.middleware
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      }).concat(apiMiddleware),
    preloadedState
  })
}

export const store = configStore()
export let persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configStore>
