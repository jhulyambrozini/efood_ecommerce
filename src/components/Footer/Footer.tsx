import { Link } from 'react-router-dom'

import { FooterContainer, SocialMedia } from './styles'
import { Logo } from '../../styles'

import logoImage from '../../assets/images/logo.svg'
import instagramIcon from '../../assets/images/instagram-icon.svg'
import facebookIcon from '../../assets/images/facebook-icon.svg'
import twitterIcon from '../../assets/images/twitter-icon.svg'

const Footer = () => (
  <FooterContainer>
    <Link to="/" title="Home">
      <Logo src={logoImage} alt="EFOOD" />
    </Link>
    <SocialMedia>
      <a href="#" title='Instagram'>
        <img src={instagramIcon} alt="Icone do instagram" />
      </a>
      <a href="#" title='Facebook'>
        <img src={facebookIcon} alt="Icone do facebook" />
      </a>
      <a href="#" title='Twitter'>
        <img src={twitterIcon} alt="Icone do twitter" />
      </a>
    </SocialMedia>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.{' '}
    </p>
  </FooterContainer>
)

export default Footer
