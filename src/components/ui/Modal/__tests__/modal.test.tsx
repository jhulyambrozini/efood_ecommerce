import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { renderWithProvider } from '../../../../utils/tests'
import Modal from '..'

const renderComponent = () => {
  const { store, container } = renderWithProvider(<Modal />, {
    preloadedState: {
      modal: {
        food: {
          foto: '/img.png',
          preco: 98.9,
          id: 1,
          nome: 'Comida A',
          descricao: 'descrição comida A',
          porcao: '3 pessoas'
        },
        isModalOpen: true
      }
    }
  })

  return { store, container }
}

describe('<Modal />', () => {
  it('should render correctly when state is true', () => {
    const { container } = renderComponent()

    expect(
      screen.getByRole('heading', { name: 'Comida A' })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render a paragraph when there is no food in the state', () => {
    renderWithProvider(<Modal />)

    expect(
      screen.getByText('Parece que não há um produto aqui :(')
    ).toBeInTheDocument()
  })

  it('should call the addFoodToCart function when clicking the add to cart button', () => {
    const { store } = renderComponent()

    const addFoodButton = screen.getByRole('button', {
      name: /Adicionar ao carrinho/i
    })

    fireEvent.click(addFoodButton)

    expect(store.getState().cart.itemsCart[0].nome).toBe('Comida A')
    expect(store.getState().modal.isModalOpen).toBeFalsy()
    expect(store.getState().sideBar.sideBarIsOpen).toBeTruthy()
  })

  it('should close modal when pressing the close button', () => {
    const { store } = renderComponent()

    const button = screen.getByRole('button', { name: 'Icone de fechar' })

    fireEvent.click(button)

    expect(store.getState().modal.isModalOpen).toBeFalsy()
  })

  it('should close modal when pressing the overlay', () => {
    const { store } = renderComponent()

    const overlayContainer = screen.getByTestId('overlay')

    fireEvent.click(overlayContainer)

    expect(store.getState().modal.isModalOpen).toBeFalsy()
  })
})
