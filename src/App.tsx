import { BrowserRouter } from "react-router-dom"
import RoutesProvider from "./routes"
import Footer from "./components/Footer/Footer"
import GlobalStyle from "./styles"

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <RoutesProvider/>
      <Footer />
    </BrowserRouter>
  )
}

export default App
