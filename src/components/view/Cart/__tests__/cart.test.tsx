import '@testing-library/jest-dom'
import { fireEvent, screen } from '@testing-library/dom'

import Cart from '..'
import { renderWithProvider } from '../../../../utils/tests'

const renderComponent = () => {
  const { container, store } = renderWithProvider(<Cart />, {
    preloadedState: {
      cart: {
        itemsCart: [
          {
            foto: 'img/img.png',
            preco: 12.7,
            id: 1,
            nome: 'comida 1',
            descricao: 'descrição 1',
            porcao: '2 pessoas'
          },
          {
            foto: 'img/img.png',
            preco: 129,
            id: 2,
            nome: 'comida 2',
            descricao: 'descrição 2',
            porcao: '2 pessoas'
          }
        ]
      }
    }
  })
  return { container, store }
}

describe('<Cart />', () => {
  it('should render without itens', () => {
    const { container } = renderWithProvider(<Cart />, {
      preloadedState: { cart: { itemsCart: [] } }
    })

    expect(screen.getByTestId('paragraph')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with 2 items in cart', () => {
    const { container } = renderComponent()

    const heading1 = screen.getByRole('heading', { name: 'comida 1' })
    const heading2 = screen.getByRole('heading', { name: 'comida 2' })
    expect(heading1).toBeInTheDocument()
    expect(heading2).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should remove an item of cart when clicking on the trash button', () => {
    const { store } = renderComponent()

    const trashButton = screen.getAllByRole('button', {
      name: 'icone de lixeira da cor rosa'
    })

    fireEvent.click(trashButton[0])

    expect(store.getState().cart.itemsCart.length).toEqual(1)
  })

  it('should call a function when clicking continue with delivery', () => {
    const { store } = renderComponent()

    const keepWithDeliveryButton = screen.getByRole('button', {
      name: /Continuar com a entrega/i
    })

    fireEvent.click(keepWithDeliveryButton)

    expect(store.getState().sideBar.component).toBe('form')
  })
})
