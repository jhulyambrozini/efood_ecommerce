import { ButtonContainer } from "./styles"

export type Props = {
  title: string
  type: 'button' | 'submit'
  onClick?: () => void
  background: 'primary' | 'secundary'
}

const Button = ({title, type, onClick, background }: Props) => (
  <ButtonContainer background={background} title={title} type={type} onClick={onClick}>{title} </ButtonContainer>
)

export default Button
