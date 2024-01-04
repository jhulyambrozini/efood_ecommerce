import type { Meta } from '@storybook/react'

import Modal from '.'

import mockStore from '../../../mocks/redux-store'
import { Provider } from 'react-redux'

const meta = {
  title: 'ui/Modal',
  component: Modal,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Modal>

// eslint-disable-next-line react-refresh/only-export-components
export default meta

export const Template = () => {
  const store = mockStore({
    modal: {
      food: {
        foto: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Comida_de_mercado.jpg',
        preco: 98.9,
        id: 1,
        nome: 'Comida A',
        descricao:
          'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        porcao: 'de 2 a 3 pessoas'
      }
    }
  })
  return (
    <Provider store={store}>
      <Modal />
    </Provider>
  )
}
