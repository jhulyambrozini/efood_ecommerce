import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { InputGroupContainer } from './styles'
import InputMask from 'react-input-mask'

export type InputGroupProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string
  id: string
  maxWidth?: string
  mask?: string
}

const InputGroup = ({
  label,
  id,
  children,
  maxWidth,
  mask,
  ...props
}: InputGroupProps) => {
  return (
    <InputGroupContainer maxWidth={maxWidth}>
      <label htmlFor={id}>{label}</label>
      {mask ? (
        <InputMask name={id} id={id} type="text" mask={mask} {...props} />
      ) : (
        <input name={id} id={id} type="text" {...props} />
      )}

      {children}
    </InputGroupContainer>
  )
}

export default InputGroup
