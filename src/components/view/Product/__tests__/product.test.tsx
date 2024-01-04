import '@testing-library/jest-dom'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithProvider } from '../../../../utils/tests'
import Product from '..'

const props = {
  foto: '/img.png',
  preco: 98.9,
  id: 1,
  nome: 'Comida A',
  descricao:
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
  porcao: '3 pessoas'
}

describe('<Product />', () => {
  it('should render the props correctly', () => {
    renderWithProvider(<Product food={props} />)

    expect(
      screen.getByRole('heading', { name: 'Comida A' })
    ).toBeInTheDocument()

    expect(screen.getByText(/A La Dolce Vita Trattoria/i)).toBeInTheDocument()
  })

  it('should execute the toOpenModal function when you click on the more details button', () => {
    const { store } = renderWithProvider(<Product food={props} />)

    const moreDetailsButton = screen.getByRole('button', {
      name: /mais detalhes/i
    })

    fireEvent.click(moreDetailsButton)

    expect(store.getState().modal.isModalOpen).toBeTruthy()
    expect(store.getState().modal.food?.nome).toBe('Comida A')
  })
})
