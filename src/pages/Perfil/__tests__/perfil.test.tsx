import '@testing-library/jest-dom'
import { fireEvent, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'
import { setupServer } from 'msw/node'
import { HttpResponse, http } from 'msw'

import Perfil from '..'
import { renderWithProvider } from '../../../utils/tests'

const server = setupServer(
  http.get(
    'https://fake-api-tau.vercel.app/api/efood/restaurantes/:id',
    ({ params }) => {
      const { id } = params

      return HttpResponse.json({
        id,
        titulo: 'Restaurante 1',
        destacado: true,
        tipo: 'italiana',
        avaliacao: 4.7,
        descricao: 'descrição restaurante 1',
        capa: 'img/img.png',
        cardapio: [
          {
            foto: 'img/img.png',
            preco: 69.9,
            id: 1,
            nome: 'comida 1',
            descricao: 'descriçao 1',
            porcao: '1 a 2 pessoas'
          },
          {
            foto: 'img/img.png',
            preco: 56.9,
            id: 2,
            nome: 'comida 2',
            descricao: 'descrição 2',
            porcao: '1 a 2 pessoas'
          },
          {
            foto: 'img/img.png',
            preco: 74.9,
            id: 3,
            nome: 'comida 3',
            descricao: 'descrição 3',
            porcao: '1 a 2 pessoas'
          },
          {
            foto: 'img/img.png',
            preco: 89.9,
            id: 4,
            nome: 'comida 4',
            descricao: 'decrição 4',
            porcao: '1 a 2 pessoas'
          }
        ]
      })
    }
  )
)

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

  it('should call a function when clicking in items on cart', async () => {
    const handleClick = vi.fn()
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

    const itemsOnCart = screen.getByRole('button', {
      name: '0 produto(s) no carrinho'
    })

    itemsOnCart.onclick = handleClick

    fireEvent.click(itemsOnCart)

    expect(handleClick).toHaveBeenCalled()
  })
})
