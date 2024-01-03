import { ReactNode } from 'react'
import { FieldSetContainer } from './styles'

type FieldSetRootProps = {
  maxWidth?: string
  children: ReactNode
}

export const FieldSetRoot = ({ maxWidth, children }: FieldSetRootProps) => (
  <FieldSetContainer maxWidth={maxWidth} role="fieldset">
    {children}
  </FieldSetContainer>
)
