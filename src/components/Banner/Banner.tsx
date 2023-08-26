import { Image, Titles } from './styles'

type Props = {
  image: string
  type: string
  title: string
}

const Banner = ({ image, type, title }: Props) => (
  <Image style={{ backgroundImage: `url(${image})` }}>
    <Titles>
      <span>{type}</span>
      <h2>{title}</h2>
    </Titles>
  </Image>
)

export default Banner
