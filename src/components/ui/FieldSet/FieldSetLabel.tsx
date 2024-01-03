type FieldSetLabelProps = {
  id: string
  label: string
}

export const FieldSetLabel = ({ id, label }: FieldSetLabelProps) => (
  <label htmlFor={id}>{label}</label>
)
