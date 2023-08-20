import logo from '../../assets/images/logo.png'
import { HeaderContainer } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <h1>
        <img src={logo} alt="EFOOD" />
      </h1>
      <h2>Viva experiências gastronômicas
        <br />
        no conforto da sua casa</h2>
    </HeaderContainer>
  )
}

export default Header
