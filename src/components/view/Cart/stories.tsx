import type { Meta, StoryObj } from '@storybook/react'

import Cart from '.'

const meta = {
  title: 'view/Cart',
  component: Cart,
  parameters: {
    tags: ['autodocs'],
    backgrounds: {
      default: 'dark'
    }
  }
} satisfies Meta<typeof Cart>

// eslint-disable-next-line react-refresh/only-export-components
export default meta
type Story = StoryObj<typeof Cart>

export const EmptyCart: Story = {
  args: {
    itemsCart: []
  }
}

export const FullCart: Story = {
  args: {
    itemsCart: [
      {
        id: 1,
        nome: 'Comida A',
        foto: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Comida_de_mercado.jpg',
        preco: 15.99,
        descricao: '',
        porcao: ''
      },
      {
        id: 2,
        nome: 'Comida B',
        foto: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Comida_de_mercado.jpg',
        preco: 25.99,
        descricao: '',
        porcao: ''
      }
    ]
  }
}
