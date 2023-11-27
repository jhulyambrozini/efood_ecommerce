import { TagContainer } from './styles'

export type TagProps = {
  text: string
}

const Tag = ({ text }: TagProps) => <TagContainer>{text}</TagContainer>

export default Tag
