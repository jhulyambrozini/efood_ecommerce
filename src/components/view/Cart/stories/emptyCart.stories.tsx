import type { Meta } from '@storybook/react'

import EmptyCart from '../EmptyCart'

const meta = {
  title: 'view/Cart/EmptyCart',
  component: EmptyCart,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} satisfies Meta<typeof EmptyCart>

// eslint-disable-next-line react-refresh/only-export-components
export default meta

export const Template = () => {
  return <EmptyCart />
}
