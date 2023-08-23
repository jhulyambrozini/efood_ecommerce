import { Link, useParams } from "react-router-dom"

import Banner from "../../components/Banner/Banner"
import ProductsList from "../../components/ProductsList/ProductsList"
import { useGetRestaurantQuery } from "../../services/api"

import { Logo } from "../../styles"
import {HeaderContainer } from "./styles"
import logoImage from '../../assets/images/logo.png'
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import Cart from "../../components/Cart/Cart"
import { open } from "../../store/reducers/cart"
import Form from "../../components/Form/Form"

export type RestaurantParams = {
  id: string
}

const Perfil = () => {
  const {id} = useParams() as RestaurantParams
  const {data: foodId} = useGetRestaurantQuery(id)
  const dispatch = useDispatch()

  const {items, isOpen} = useSelector((state: RootReducer) => state.cart)
  const {formIsOpen} = useSelector((state: RootReducer) => state.form)

  const openToCart = () => {
    dispatch(open())
  }

  if(!foodId){
    return <h3>caregando....</h3>
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
        <span onClick={openToCart}>
          {items.length} produto(s) no carrinho
        </span>
      </HeaderContainer>
      {foodId && (
        <>
         <Banner image={foodId?.capa} title={foodId?.titulo} type={foodId?.tipo}/>
         <ProductsList foods={foodId}/>
        </>
      )}
      {isOpen &&  <Cart />}
      {formIsOpen &&  <Form />}
    </>
  )
}

export default Perfil
