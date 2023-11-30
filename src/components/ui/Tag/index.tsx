import { TagContainer } from './styles'

export type TagProps = {
  text: string
}

const Tag = ({ text }: TagProps) => (
  <TagContainer role="tag-container">{text}</TagContainer>
)

export default Tag
