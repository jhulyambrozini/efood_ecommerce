import { FocusEventHandler, ChangeEventHandler } from 'react'

export type FieldSetInputProps = {
  id: string
  onBlur?: FocusEventHandler<HTMLInputElement>
  onChange?: ChangeEventHandler<HTMLInputElement>
  value?: string
  type?: string
  required: 'true' | 'false'
}

export const FieldSetInput = ({
  id,
  type,
  onBlur,
  onChange,
  value,
  required
}: FieldSetInputProps) => (
  <input
    name={id}
    id={id}
    type={type}
    onBlur={onBlur}
    onChange={onChange}
    value={value}
    aria-required={required}
  />
)
