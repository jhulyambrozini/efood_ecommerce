import { FocusEventHandler, ChangeEventHandler } from 'react'

export type FieldSetInputProps = {
  id: string
  onBlur?: FocusEventHandler<HTMLInputElement>
  onChange?: ChangeEventHandler<HTMLInputElement>
  value?: string
  type?: string
}

export const FieldSetInput = ({
  id,
  type,
  onBlur,
  onChange,
  value
}: FieldSetInputProps) => (
  <input
    name={id}
    id={id}
    type={type}
    onBlur={onBlur}
    onChange={onChange}
    value={value}
  />
)
