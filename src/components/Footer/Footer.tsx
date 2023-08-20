import instagramIcon from '../../assets/images/instagram-icon.svg'
import facebookIcon from '../../assets/images/facebook-icon.svg'
import twitterIcon from '../../assets/images/twitter-icon.svg'
import logo from '../../assets/images/logo.png'

import { FooterContainer, SocialMedia } from './styles'

const Footer = () => (
  <FooterContainer>
    <img src={logo} alt="EFOOD" />
    <SocialMedia>
      <img src={instagramIcon} alt="Icone do instagram" />
      <img src={facebookIcon} alt="Icone do facebook" />
      <img src={twitterIcon} alt="Icone do twitter" />
    </SocialMedia>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br/>
      dos produtos é toda do estabelecimento contratado.{' '}
    </p>
  </FooterContainer>
)

export default Footer
