import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import GlobalStyle from './styles'

import RoutesProvider from './routes'
import { persistor, store } from './store'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <GlobalStyle />
          <RoutesProvider />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
