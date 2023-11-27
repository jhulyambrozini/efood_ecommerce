import type { Meta } from '@storybook/react'

import Loader from '.'

const meta = {
  title: 'ui/Loader',
  component: Loader,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Loader>

// eslint-disable-next-line react-refresh/only-export-components
export default meta

export const Template = () => {
  return <Loader />
}
