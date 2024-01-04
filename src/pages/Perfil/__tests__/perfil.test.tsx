import '@testing-library/jest-dom'
import { fireEvent, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import Perfil from '..'
import { renderWithProvider } from '../../../utils/redux-store-tests'

import { server } from '../../../mocks/api/index-server'

describe('<Perfil />', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('should render correctly with loader', () => {
    renderWithProvider(<Perfil />)

    expect(screen.getByTestId('loader-svg')).toBeInTheDocument()
  })
  it('should render correctly after loading', async () => {
    renderWithProvider(
      <MemoryRouter>
        <Perfil />
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: 'Restaurante 1' })
      ).toBeInTheDocument()
    })
  })

  it('should open sidebar when clicking in items on cart', async () => {
    const { store } = renderWithProvider(
      <MemoryRouter>
        <Perfil />
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: 'Restaurante 1' })
      ).toBeInTheDocument()
    })

    const itemsOnCart = screen.getByRole('button', {
      name: '0 produto(s) no carrinho'
    })

    fireEvent.click(itemsOnCart)

    expect(store.getState().sideBar.sideBarIsOpen).toBeTruthy()
  })
})
