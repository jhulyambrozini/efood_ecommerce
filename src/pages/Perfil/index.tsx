import { Link, useParams } from "react-router-dom"

import Banner from "../../components/Banner/Banner"
import ProductsList from "../../components/ProductsList/ProductsList"
import { useGetRestaurantQuery } from "../../services/api"

import { Logo } from "../../styles"
import {HeaderContainer } from "./styles"
import logoImage from '../../assets/images/logo.png'

export type RestaurantParams = {
  id: string
}

const Perfil = () => {
  const {id} = useParams() as RestaurantParams
  const {data: foodId} = useGetRestaurantQuery(id)

  if(!foodId){
    return <h3>careegando....</h3>
  }

  return (
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
      {foodId && (
        <>
         <Banner image={foodId?.capa} title={foodId?.titulo} type={foodId?.tipo}/>
         <ProductsList foods={foodId}/>
        </>
      )}
    </>
  )
}

export default Perfil
