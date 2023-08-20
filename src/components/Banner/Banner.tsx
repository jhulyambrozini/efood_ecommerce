import { Image, Titles } from "./styles"
import bannerImg from '../../assets/images/image-1.png'

const Banner = () => (
  <Image style={{backgroundImage: `url(${bannerImg})`}}>
    <Titles>
      <span>Italiana</span>
      <h2>La Dolce Vita Trattoria</h2>
    </Titles>
  </Image>
)

export default Banner