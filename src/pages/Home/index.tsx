import { Link } from 'react-router-dom'

import CategorytList from '../../components/CategoryList/CategoryList'

import { HeaderContainer } from './styles'
import { Logo } from '../../styles'

import logoImage from '../../assets/images/logo.svg'

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <h1>
          <Link to="/" title='Home'>
            <Logo src={logoImage} alt="EFOOD" />
          </Link>
        </h1>
        <h2>
          Viva experiências gastronômicas
          <br />
          no conforto da sua casa
        </h2>
      </HeaderContainer>
      <CategorytList />
    </>
  )
}

export default Home
