import type { Meta } from '@storybook/react'

import Category, { CategoryProps } from '.'

const meta = {
  title: 'view/Category',
  component: Category,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/1/1e/Comida_de_mercado.jpg',
    title: 'La Doce Vita',
    type: 'Gourmet',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    evaluation: 4.5,
    detach: true
  }
} satisfies Meta<typeof Category>

// eslint-disable-next-line react-refresh/only-export-components
export default meta

export const Template = (args: CategoryProps) => {
  return <Category {...args} />
}
