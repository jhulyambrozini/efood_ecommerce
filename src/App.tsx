import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import RoutesProvider from './routes'
import store from './store'
import GlobalStyle from './styles'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <RoutesProvider />
      </BrowserRouter>
    </Provider>
  )
}

export default App
