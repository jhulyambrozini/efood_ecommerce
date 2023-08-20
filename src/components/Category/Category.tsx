import Button from '../Button/Button'
import { CardContainer, Desc,  Infos,  Title } from './styles'
import starIcon from '../../assets/images/estrela-icon.svg'
import Tag from '../Tag/Tag'
import { Link } from 'react-router-dom'

type Props = {
  image: string
  title: string
  description: string
  detach?: boolean
  type: string
  evaluation: number
}

const Category = ({detach = true, type, title, evaluation, description, image}: Props) => {
  return (
    <CardContainer>
      <img src={image} alt='' />
      <div className='tags'>
        {detach && <Tag>Destaque da semana</Tag>}
        <Tag>{type}</Tag>
      </div>
        <Infos>
          <Title>{title}</Title>
          <div>
            <span>{evaluation}</span>
            <img src={starIcon} alt="estrela de avaliação" />
          </div>
        </Infos>
        <Desc>{description}</Desc>
        <Link to='/perfil'>
          <Button title='Saiba mais' background='primary' type='button' />
        </Link>
    </CardContainer>
  )
}

export default Category
