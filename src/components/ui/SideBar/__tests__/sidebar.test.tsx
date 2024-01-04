import '@testing-library/jest-dom'
import { fireEvent, screen } from '@testing-library/dom'

import SideBar from '..'
import { renderWithProvider } from '../../../../utils/redux-store-tests'

const renderComponent = () => {
  const { store } = renderWithProvider(<SideBar />, {
    preloadedState: {
      sideBar: {
        component: 'form',
        sideBarIsOpen: true
      }
    }
  })
  return { store }
}
describe('<Sidebar />', () => {
  it('should render correctly', () => {
    renderWithProvider(<SideBar />)
    expect(screen.getByText(/O carrinho está vazio/i)).toBeInTheDocument()
  })

  it('should close sidebar when pressing the close button', () => {
    const { store } = renderComponent()

    const button = screen.getByRole('button', { name: 'Icone de fechar' })

    fireEvent.click(button)

    expect(store.getState().sideBar.sideBarIsOpen).toBeFalsy()
  })

  it('should render with a Form component', () => {
    renderComponent()

    const headingDelivery = screen.getByRole('heading', { name: /entrega/i })
    expect(headingDelivery).toBeInTheDocument()
  })

  it('should render with a Cart component', () => {
    renderWithProvider(<SideBar />, {
      preloadedState: {
        sideBar: {
          component: 'cart',
          sideBarIsOpen: true
        },
        cart: {
          itemsCart: [
            {
              foto: 'img/img.png',
              preco: 12.7,
              id: 1,
              nome: 'comida 1',
              descricao: 'descricao 1',
              porcao: '2'
            }
          ]
        }
      }
    })

    const buttonContinueWithDelivery = screen.getByRole('button', {
      name: /continuar com a entrega/i
    })
    expect(buttonContinueWithDelivery).toBeInTheDocument()
  })

  it('should close sidebar when pressing the overlay', () => {
    const { store } = renderComponent()

    const overlayContainer = screen.getByRole('overlay-container')

    fireEvent.click(overlayContainer)

    expect(store.getState().sideBar.sideBarIsOpen).toBeFalsy()
  })

  it('should change the component state when close Sidebar', () => {
    const { store } = renderComponent()

    const button = screen.getByRole('button', { name: 'Icone de fechar' })

    fireEvent.click(button)

    expect(store.getState().sideBar.component).toEqual('cart')
  })
})
