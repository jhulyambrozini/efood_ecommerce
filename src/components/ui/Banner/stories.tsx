import type { Meta } from '@storybook/react'

import Banner, { BannerProps } from '.'

const meta = {
  title: 'ui/Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  args: {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/1/1e/Comida_de_mercado.jpg',
    title: 'La Doce Vita',
    type: 'Gourmet'
  }
} satisfies Meta<typeof Banner>

// eslint-disable-next-line react-refresh/only-export-components
export default meta

export const Template = (args: BannerProps) => {
  return <Banner {...args} />
}
