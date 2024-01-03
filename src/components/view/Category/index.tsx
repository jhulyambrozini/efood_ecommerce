import { useNavigate } from 'react-router-dom'

import Tag from '../../ui/Tag'
import Button from '../../ui/Button'

import * as Style from './styles'
import starIcon from '../../../assets/images/estrela-icon.svg'

import Image from '../../../utils/Image'
import { formatDescription } from '../../../utils'

export type CategoryProps = {
  image: string
  title: string
  description: string
  detach?: boolean
  type: string
  evaluation: number
  id: number
}

const Category = ({
  detach,
  type,
  title,
  evaluation,
  description,
  image,
  id
}: CategoryProps) => {
  const navigate = useNavigate()
  return (
    <Style.CardContainer>
      <Image src={image} alt={title} />
      <div className="tags">
        {detach && (
          <>
            <Tag text="Destaque da semana" />
            <Tag text={type} />
          </>
        )}
      </div>
      <Style.Infos>
        <Style.Title>{title}</Style.Title>
        <div>
          <span>{evaluation}</span>
          <img src={starIcon} alt="estrela de avaliação" />
        </div>
      </Style.Infos>
      <Style.Desc>{formatDescription(description)}</Style.Desc>
      <Button
        label="Saiba mais"
        title="Saiba mais"
        background="primary"
        type="button"
        onClick={() => navigate(`/perfil/${id}`)}
      />
    </Style.CardContainer>
  )
}

export default Category
