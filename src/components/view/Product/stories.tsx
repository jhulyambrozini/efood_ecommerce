import type { Meta } from '@storybook/react'

import Product, { ProductProps } from '.'

const foodMock = {
  foto: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Comida_de_mercado.jpg',
  preco: 98.9,
  id: 1,
  nome: 'Comida A',
  descricao:
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
  porcao: 'de 2 a 3 pessoas'
}

const meta = {
  title: 'view/Product',
  component: Product,
  parameters: {
    layout: 'centered'
  },
  args: {
    food: foodMock
  }
} satisfies Meta<typeof Product>

// eslint-disable-next-line react-refresh/only-export-components
export default meta

export const Template = (args: ProductProps) => {
  return <Product {...args} />
}
