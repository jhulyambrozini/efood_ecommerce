import type { Meta } from '@storybook/react'

import InputGroup, { InputGroupProps } from '.'

const meta = {
  title: 'ui/InputGroup',
  component: InputGroup,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark'
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof InputGroup>

// eslint-disable-next-line react-refresh/only-export-components
export default meta

export const Default = (args: InputGroupProps) => {
  return (
    <InputGroup {...args} label="Endereço" id="adress">
      {args.children}
    </InputGroup>
  )
}

export const withMask = (args: InputGroupProps) => {
  return (
    <InputGroup
      {...args}
      mask="9999 9999 9999 99999"
      label="Número no cartão"
      id="cardNumber"
    >
      {args.children}
    </InputGroup>
  )
}
