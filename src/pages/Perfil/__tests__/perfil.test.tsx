import '@testing-library/jest-dom'
import { HttpResponse, http } from 'msw'
import { vi } from 'vitest'

import { screen, waitFor } from '@testing-library/react'

import { setupServer } from 'msw/node'
import { renderWithProvider } from '../../../utils/tests'
import Perfil from '..'
import { MemoryRouter } from 'react-router-dom'

export const server = setupServer(
  http.get('https://fake-api-tau.vercel.app/api/efood/restaurantes', () => {
    return HttpResponse.json({
      id: 1,
      titulo: 'restaurante 1',
      destacado: true,
      tipo: 'italiano',
      avaliacao: 4,
      descricao: 'descricao',
      capa: 'img/img.png',
      cardapio: [
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
    })
  })
)

describe('<Perfil />', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('should render correctly with loader', () => {
    renderWithProvider(<Perfil />)

    expect(screen.getByTestId('loader-svg')).toBeInTheDocument()
  })
  it('tetse', async () => {
    global.performance.clearResourceTimings = vi.fn()()
    renderWithProvider(
      <MemoryRouter>
        <Perfil />
      </MemoryRouter>
    )

    const loader = screen.getByTestId('loader-svg')

    await waitFor(() => {
      expect(loader).not.toBeInTheDocument()
    })
  })
})
