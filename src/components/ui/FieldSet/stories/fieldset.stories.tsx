import type { Meta, StoryObj } from '@storybook/react'

import { FieldSet } from '..'

const meta = {
  title: 'ui/FieldSet',
  component: FieldSet.Root,
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: { disable: true } }
  }
} satisfies Meta<typeof FieldSet.Root>

// eslint-disable-next-line react-refresh/only-export-components
export default meta
type Story = StoryObj<typeof FieldSet.Root>

export const WithInputNormal: Story = {
  args: {
    maxWidth: '9rem',
    children: (
      <>
        <FieldSet.Label id="name" label="Nome" />
        <FieldSet.Input required="true" id="name" type="text" />
      </>
    )
  }
}

export const WithInputMask: Story = {
  args: {
    maxWidth: '9rem',
    children: (
      <>
        <FieldSet.Label id="month" label="Mês" />
        <FieldSet.InputMask
          required="true"
          id="month"
          type="number"
          mask="99"
        />
      </>
    )
  }
}

export const WithErrorMessage: Story = {
  args: {
    maxWidth: '9rem',
    children: (
      <>
        <FieldSet.Label id="month" label="Mês" />
        <FieldSet.Input required="true" id="month" type="number" />
        <FieldSet.ErrorMessage errorMessage="campo obrigatório" />
      </>
    )
  }
}
