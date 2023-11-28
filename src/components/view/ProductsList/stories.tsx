import type { Meta } from '@storybook/react'

import ProductsList, { ProductsListProps } from '.'

const meta = {
  title: 'view/ProductsList',
  component: ProductsList,
  args: {
    foods: {
      id: 1,
      avaliacao: 5,
      capa: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Comida_de_mercado.jpg',
      descricao:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      tipo: 'Gourmet',
      destacado: true,
      titulo: 'La rosta',
      cardapio: [
        {
          foto: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Comida_de_mercado.jpg',
          preco: 98.9,
          id: 1,
          nome: 'Comida A',
          descricao:
            'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
          porcao: 'de 2 a 3 pessoas'
        },
        {
          foto: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Comida_de_mercado.jpg',
          preco: 98.9,
          id: 2,
          nome: 'Comida B',
          descricao:
            'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
          porcao: 'de 2 a 3 pessoas'
        },
        {
          foto: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Comida_de_mercado.jpg',
          preco: 98.9,
          id: 3,
          nome: 'Comida C',
          descricao:
            'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
          porcao: 'de 2 a 3 pessoas'
        },
        {
          foto: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Comida_de_mercado.jpg',
          preco: 98.9,
          id: 4,
          nome: 'Comida D',
          descricao:
            'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
          porcao: 'de 2 a 3 pessoas'
        }
      ]
    }
  }
} satisfies Meta<typeof ProductsList>

// eslint-disable-next-line react-refresh/only-export-components
export default meta

export const Template = (args: ProductsListProps) => {
  return <ProductsList {...args} />
}
