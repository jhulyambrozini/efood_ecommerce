import { Provider } from 'react-redux'
import type { Meta } from '@storybook/react'

import FullCart from '../FullCart'
import mockStore from '../../../../mocks/redux-store'

const meta = {
  title: 'view/Cart/FullCart',
  component: FullCart,
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    layout: 'padded'
  }
} satisfies Meta<typeof FullCart>

// eslint-disable-next-line react-refresh/only-export-components
export default meta

export const Template = () => {
  const store = mockStore({
    cart: {
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
  })
  return (
    <Provider store={store}>
      <FullCart />
    </Provider>
  )
}
