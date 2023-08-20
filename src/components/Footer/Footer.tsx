import { Link } from 'react-router-dom'
import logoImage from '../../assets/images/logo.png'
import instagramIcon from '../../assets/images/instagram-icon.svg'
import facebookIcon from '../../assets/images/facebook-icon.svg'
import twitterIcon from '../../assets/images/twitter-icon.svg'

import { FooterContainer, SocialMedia } from './styles'
import { Logo } from '../../styles'

const Footer = () => (
  <FooterContainer>
    <Link to='/'>
      <Logo src={logoImage} alt="EFOOD" />
    </Link>
    <SocialMedia>
      <a href="#">
        <img src={instagramIcon} alt="Icone do instagram" />
      </a>
      <a href="#">
        <img src={facebookIcon} alt="Icone do facebook" />
      </a>
      <a href="#">
        <img src={twitterIcon} alt="Icone do twitter" />
      </a>
    </SocialMedia>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos responsabilidade pela entrega, qualidade <br/> dos produtos é toda do estabelecimento contratado.{' '}
    </p>
  </FooterContainer>
)

export default Footer
