import InputMask from 'react-input-mask'
import { FieldSetInputProps } from './FieldSetInput'

export type FieldSetInputMaskProps = FieldSetInputProps & {
  mask: string
}

export const FieldSetInputMask = ({
  id,
  type,
  onBlur,
  onChange,
  value,
  mask, required
}: FieldSetInputMaskProps) => (
  <InputMask
    name={id}
    id={id}
    type={type}
    onBlur={onBlur}
    onChange={onChange}
    value={value}
    mask={mask}
    aria-required={required}
  />
)
