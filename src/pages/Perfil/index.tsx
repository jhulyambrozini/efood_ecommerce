import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import ProductsList from '../../components/view/ProductsList'
import SideBar from '../../components/ui/SideBar'
import Footer from '../../components/ui/Footer'
import Banner from '../../components/ui/Banner'
import Loader from '../../components/ui/Loader'

import { Logo } from '../../styles'
import { HeaderContainer } from './styles'
import logoImage from '../../assets/images/logo.svg'

import { useGetRestaurantQuery } from '../../services/api'
import { RootState } from '../../store'
import { openSideBar } from '../../store/reducers/sideBar'

type RestaurantParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as RestaurantParams
  const { data, isLoading } = useGetRestaurantQuery(id)
  const dispatch = useDispatch()

  const { itemsCart } = useSelector((state: RootState) => state.cart)
  const { sideBarIsOpen } = useSelector((state: RootState) => state.sideBar)

  if (isLoading) return <Loader />

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
      <main>
        {data && (
          <>
            <Banner image={data.capa} title={data.titulo} type={data.tipo} />
            <ProductsList foods={data} />
          </>
        )}
        {sideBarIsOpen && <SideBar />}
      </main>
      <Footer />
    </>
  )
}

export default Perfil
