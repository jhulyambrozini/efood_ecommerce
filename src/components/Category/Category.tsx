import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import Tag from '../Tag/Tag'
import * as Style from './styles'
import starIcon from '../../assets/images/estrela-icon.svg'
import { getDescription } from '../../utils'

type Props = {
  image: string
  title: string
  description: string
  detach?: boolean
  type: string
  evaluation: number
  id: number
}

const Category = ({detach, type, title, evaluation, description, image, id}: Props) => {

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
        <Link to={`/perfil/${id}`} >
          <Button title='Clique aqui para mais informações' background='primary' type='button'>Saiba mais</Button>
        </Link>
    </Style.CardContainer>
  )
}

export default Category
