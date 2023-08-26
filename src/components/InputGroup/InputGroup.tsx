import { InputGroupContainer } from "./styles"

export type Props = {
  id: string
  label: string
  type: string
  maxWidth?: string
  className: string
  name: string
  value: string
  onChange: any
  onBlur: any
}

const InputGroup = ({id, label, type, maxWidth, className, name, value, onChange, onBlur}: Props) => (
  <InputGroupContainer className={className} >
    <label htmlFor={id}>{label}</label>
    <input name={name} id={id} value={value} onChange={onChange} onBlur={onBlur} type={type} style={{maxWidth: maxWidth}}/>
  </InputGroupContainer>
)

export default InputGroup
