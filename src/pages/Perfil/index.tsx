import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import SideBar from '../../components/SideBar/SideBar'
import Loader from '../../components/ui/Loader/Loader'
import Banner from '../../components/ui/Banner/Banner'
import ProductsList from '../../components/ProductsList/ProductsList'

import { Logo } from '../../styles'
import { HeaderContainer } from './styles'
import logoImage from '../../assets/images/logo.svg'

import { useGetRestaurantQuery } from '../../services/api'
import { RootReducer } from '../../store'
import { openSideBar } from '../../store/reducers/sideBar'

export type RestaurantParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as RestaurantParams
  const { data: foodId } = useGetRestaurantQuery(id)
  const dispatch = useDispatch()

  const { itemsCart } = useSelector((state: RootReducer) => state.cart)
  const { sideBarIsOpen } = useSelector((state: RootReducer) => state.sideBar)

  if (!foodId) return <Loader />

  return (
    <>
      <HeaderContainer>
        <span>Restaurantes</span>
        <h1>
          <Link to="/" title="Home">
            <Logo src={logoImage} alt="EFOOD" />
          </Link>
        </h1>
        <span onClick={() => dispatch(openSideBar())}>
          {itemsCart.length} produto(s) no carrinho
        </span>
      </HeaderContainer>
      {foodId && (
        <>
          <Banner
            image={foodId.capa}
            title={foodId.titulo}
            type={foodId.tipo}
          />
          <ProductsList foods={foodId} />
        </>
      )}
      {sideBarIsOpen && <SideBar />}
    </>
  )
}

export default Perfil
