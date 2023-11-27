import Image from '../../../utils/Image'
import { BannerContainer, Titles } from './styles'

export type BannerProps = {
  image: string
  type: string
  title: string
}

const Banner = ({ image, type, title }: BannerProps) => {
  return (
    <BannerContainer>
      <Image src={image} alt={title} />
      <Titles>
        <span>{type}</span>
        <h2>{title}</h2>
      </Titles>
    </BannerContainer>
  )
}

export default Banner
