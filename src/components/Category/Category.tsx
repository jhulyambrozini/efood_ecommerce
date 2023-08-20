import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import Tag from '../Tag/Tag'
import * as Style from './styles'
import starIcon from '../../assets/images/estrela-icon.svg'

type Props = {
  image: string
  title: string
  description: string
  detach?: boolean
  type: string
  evaluation: number
}

const Category = ({detach, type, title, evaluation, description, image}: Props) => {

  const getDescription = (description: string) => {
    if (description.length > 210) {
      return description.slice(0, 207) + '...'
    }
  }

  return (
    <Style.CardContainer>
      <img src={image} alt={title} />
      <div className='tags'>
        {detach && <Tag>Destaque da semana</Tag>}
        <Tag>{type}</Tag>
      </div>
        <Style.Infos>
          <Style.Title>{title}</Style.Title>
          <div>
            <span>{evaluation}</span>
            <img src={starIcon} alt="estrela de avaliação" />
          </div>
        </Style.Infos>
        <Style.Desc>{getDescription(description)}</Style.Desc>
        <Link to='/perfil'>
          <Button title='Saiba mais' background='primary' type='button' />
        </Link>
    </Style.CardContainer>
  )
}

export default Category
