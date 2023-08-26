import { ButtonContainer } from './styles'

export type Props = {
  title: string
  type: 'button' | 'submit'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  background: 'primary' | 'secundary'
  children: string | string[]
}

const Button = ({ title, type, onClick, background, children }: Props) => (
  <ButtonContainer
    background={background}
    title={title}
    type={type}
    onClick={onClick}
  >
    {children}
  </ButtonContainer>
)

export default Button
