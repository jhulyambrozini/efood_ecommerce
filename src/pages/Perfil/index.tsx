import { Link } from "react-router-dom"

import Banner from "../../components/Banner/Banner"
import ProductsList from "../../components/ProductsList/ProductsList"

import { Logo } from "../../styles"
import {HeaderContainer } from "./styles"
import logoImage from '../../assets/images/logo.png'

const Perfil = () => (
  <>
    <HeaderContainer>
      <span>Restaurantes</span>
      <h1>
          <Link to='/'>
            <Logo src={logoImage} alt="EFOOD" />
          </Link>
      </h1>
      <span>
        0 produto(s) no carrinho
      </span>
    </HeaderContainer>
    <Banner />
    <ProductsList />
  </>
)

export default Perfil
