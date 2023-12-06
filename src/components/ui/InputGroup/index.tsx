import { ChangeEventHandler, FocusEventHandler, ReactNode } from 'react'
import InputMask from 'react-input-mask'
import { InputGroupContainer } from './styles'

export type InputGroupProps = {
  label: string
  id: string
  maxWidth?: string
  mask?: string
  children?: ReactNode
  onBlur?: FocusEventHandler<HTMLInputElement>
  onChange?: ChangeEventHandler<HTMLInputElement>
  value?: string
  type?: string
}

const InputGroup = ({
  label,
  id,
  children,
  maxWidth,
  mask,
  onBlur,
  onChange,
  value,
  type
}: InputGroupProps) => {
  return (
    <InputGroupContainer maxWidth={maxWidth} role="input-group">
      <label htmlFor={id}>{label}</label>
      {mask ? (
        <InputMask
          name={id}
          id={id}
          type={type}
          mask={mask}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
        />
      ) : (
        <input
          name={id}
          id={id}
          type={type}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
        />
      )}

      {children}
    </InputGroupContainer>
  )
}

export default InputGroup
