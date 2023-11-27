import type { Meta } from '@storybook/react'

import Tag, { TagProps } from '.'

const meta = {
  title: 'ui/Tag',
  component: Tag,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    text: 'Destaque da semana'
  }
} satisfies Meta<typeof Tag>

// eslint-disable-next-line react-refresh/only-export-components
export default meta

export const Template = (args: TagProps) => {
  return <Tag {...args} />
}
