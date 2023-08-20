import logoImage from '../../assets/images/logo.png'
import { Logo } from '../../styles'
import { HeaderContainer} from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <h1>
        <Logo src={logoImage} alt="EFOOD" />
      </h1>
      <h2>Viva experiências gastronômicas
        <br />
        no conforto da sua casa</h2>
    </HeaderContainer>
  )
}

export default Header
