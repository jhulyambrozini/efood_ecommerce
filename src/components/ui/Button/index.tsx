import { ButtonContainer } from './styles'

export type ButtonProps = {
  type: 'button' | 'submit' | 'reset'
  background: 'primary' | 'secundary'
  label: string
  title: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ type, background, label, title, onClick }: ButtonProps) => (
  <ButtonContainer
    background={background}
    title={title}
    type={type}
    onClick={onClick}
  >
    {label}
  </ButtonContainer>
)

export default Button
