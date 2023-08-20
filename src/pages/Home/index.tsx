import CategorytList from "../../components/CategoryList/CategoryList"
import { Restaurant } from "../../models/Restaurants"
import japanese from '../../assets/images/imagem.png'
import italian from '../../assets/images/image-1.png'
import logoImage from '../../assets/images/logo.png'
import { HeaderContainer } from "./styles"
import { Link } from "react-router-dom"
import { Logo } from "../../styles"

const restaurant: Restaurant[] = [
  {
    id: 1,
    description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    detach: true,
    evaluation: 4.9,
    image: japanese,
    title: 'Hioki Sushi',
    type: 'Japonesa'
  },
  {
    id: 2,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    detach: false,
    evaluation: 4.6,
    image: italian,
    title: 'La Dolce Vita Trattoria',
    type: 'Italiana'
  },
  {
    id: 3,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    detach: false,
    evaluation: 4.6,
    image: italian,
    title: 'La Dolce Vita Trattoria',
    type: 'Italiana'
  },
  {
    id: 4,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    detach: false,
    evaluation: 4.6,
    image: italian,
    title: 'La Dolce Vita Trattoria',
    type: 'Italiana'
  },
  {
    id: 5,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    detach: false,
    evaluation: 4.6,
    image: italian,
    title: 'La Dolce Vita Trattoria',
    type: 'Italiana'
  },
  {
    id: 6,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    detach: false,
    evaluation: 4.6,
    image: italian,
    title: 'La Dolce Vita Trattoria',
    type: 'Italiana'
  },

]
const Home = () => (
  <>
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
    <CategorytList restaurants={restaurant}/>
  </>
)

export default Home
