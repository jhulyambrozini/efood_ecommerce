import { BrowserRouter } from "react-router-dom"
import RoutesProvider from "./routes"
import GlobalStyle from "./styles"
import Footer from "./components/Footer/Footer"

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
