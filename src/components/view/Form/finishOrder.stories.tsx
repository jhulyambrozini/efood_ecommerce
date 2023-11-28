import type { Meta } from '@storybook/react'

import FinishOrder, { FinishOrderProps } from './FinishOrder'

const meta = {
  title: 'view/FinishOrder',
  component: FinishOrder,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  tags: ['autodocs'],
  args: {
    orderId: '526370'
  }
} satisfies Meta<typeof FinishOrder>

// eslint-disable-next-line react-refresh/only-export-components
export default meta

export const Template = (args: FinishOrderProps) => {
  return <FinishOrder {...args} />
}
