import { BrowserRouter } from "react-router-dom"
import {Provider} from 'react-redux'

import Footer from "./components/Footer/Footer"

import GlobalStyle from "./styles"

import RoutesProvider from "./routes"
import store from "./store"

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <RoutesProvider/>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
