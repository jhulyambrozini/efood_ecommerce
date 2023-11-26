import { ButtonContainer } from './styles'

export type ButtonProps = {
  type: 'button' | 'submit'
  background: 'primary' | 'secundary'
  text?: string
  title: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ type, background, text, title, onClick }: ButtonProps) => (
  <ButtonContainer
    background={background}
    title={title}
    type={type}
    onClick={onClick}
  >
    {text ? text : title}
  </ButtonContainer>
)

export default Button
