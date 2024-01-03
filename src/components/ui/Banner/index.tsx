import Image from '../../../utils/Image'
import * as Style from './styles'

export type BannerProps = {
  image: string
  type: string
  title: string
}

const Banner = ({ image, type, title }: BannerProps) => (
  <Style.BannerContainer>
    <Image src={image} alt={title} />
    <Style.Titles>
      <span>{type}</span>
      <h2>{title}</h2>
    </Style.Titles>
  </Style.BannerContainer>
)

export default Banner
