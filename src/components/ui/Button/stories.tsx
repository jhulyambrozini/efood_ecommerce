import type { Meta, StoryObj } from '@storybook/react'

import Button from '.'

const meta = {
  title: 'ui/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    onClick: { control: { disable: true } }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button>

// eslint-disable-next-line react-refresh/only-export-components
export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    label: 'Button primary',
    background: 'primary',
    title: 'Click me',
    type: 'button'
  }
}

export const Secondary: Story = {
  args: {
    label: 'Button secundary',
    background: 'secundary',
    title: 'Click me',
    type: 'button'
  }
}
