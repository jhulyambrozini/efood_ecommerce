import '@testing-library/jest-dom'
import { vi } from 'vitest'
import { fireEvent, screen } from '@testing-library/dom'
import SideBar from '..'
import { renderWithProvider } from '../../../../utils/tests'

describe('<Sidebar />', () => {
  it('should render correctly', () => {
    renderWithProvider(<SideBar />)
    expect(screen.getByText(/O carrinho está vazio/i)).toBeInTheDocument()
  })

  it('should call a function when pressing the close button or overlay container', () => {
    const handleClose = vi.fn()
    renderWithProvider(<SideBar />)
    const button = screen.getByRole('button', { name: 'Icone de fechar' })
    const overlayContainer = screen.getByRole('overlay-container')

    button.onclick = handleClose
    overlayContainer.onclick = handleClose

    fireEvent.click(overlayContainer)
    fireEvent.click(button)

    expect(handleClose).toHaveBeenCalledTimes(2)
  })

  it('should change the component state when close Sidebar', () => {
    const handleClose = vi.fn()
    const { store } = renderWithProvider(<SideBar />, {
      preloadedState: {
        sideBar: {
          component: 'form',
          sideBarIsOpen: true
        }
      }
    })

    const button = screen.getByRole('button', { name: 'Icone de fechar' })

    button.onclick = handleClose

    fireEvent.click(button)

    expect(handleClose).toHaveBeenCalled()
    expect(store.getState().sideBar.component).toEqual('cart')
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

  it('should render with a Form component', () => {
    renderWithProvider(<SideBar />, {
      preloadedState: {
        sideBar: {
          component: 'form',
          sideBarIsOpen: true
        }
      }
    })

    const headingDelivery = screen.getByRole('heading', { name: /entrega/i })
    expect(headingDelivery).toBeInTheDocument()
  })
})
