import { fireEvent, screen } from '@testing-library/dom'
import SideBar from '..'
import { renderWithProvider } from '../../../../utils/tests'
import Button from '../../Button'

describe('<Sidebar />', () => {
  it('should render correctly', () => {
    renderWithProvider(<SideBar />)
    expect(screen.getByText(/O carrinho está vazio/i)).toBeInTheDocument()
  })

  it('should call a function when pressing the close button', () => {
    const handleClose = jest.fn()
    renderWithProvider(<SideBar />)
    const button = screen.getByRole('button', { name: 'Icone de fechar' })
    expect(button).toBeInTheDocument()

    button.onclick = handleClose

    fireEvent.click(button)

    expect(handleClose).toHaveBeenCalled()
  })

  it('should call a function when pressing the overlay container', () => {
    const handleCloseOverlay = jest.fn()
    renderWithProvider(<SideBar />)
    const overlayContainer = screen.getByRole('overlay-container')
    expect(overlayContainer).toBeInTheDocument()

    overlayContainer.onclick = handleCloseOverlay

    fireEvent.click(overlayContainer)

    expect(handleCloseOverlay).toHaveBeenCalled()
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

  it('should match snapshot', () => {
    const { container } = renderWithProvider(<SideBar />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
