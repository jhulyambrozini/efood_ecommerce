import { Link } from 'react-router-dom'
import logoImage from '../../assets/images/logo.png'
import { Logo } from '../../styles'
import { HeaderContainer} from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <h1>
        <Link to='/'>
          <Logo src={logoImage} alt="EFOOD" />
        </Link>
      </h1>
      <h2>Viva experiências gastronômicas
        <br />
        no conforto da sua casa</h2>
    </HeaderContainer>
  )
}

export default Header
