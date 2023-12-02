import '@testing-library/jest-dom'
import { screen, waitFor } from '@testing-library/react'
import CategorytList from '..'
import { HttpResponse, http } from 'msw'
import { setupServer } from 'msw/node'
import { renderWithProvider } from '../../../../utils/tests'
import { MemoryRouter } from 'react-router-dom'

export const server = setupServer(
  http.get('https://fake-api-tau.vercel.app/api/efood/restaurantes', () => {
    return HttpResponse.json([
      {
        id: 1,
        titulo: 'restaurante 1',
        destacado: true,
        tipo: 'italiana',
        avaliacao: 4.7,
        descricao: 'descrição 1',
        capa: 'img/img.png'
      },
      {
        id: 2,
        titulo: 'restaurante 2',
        destacado: false,
        tipo: 'italiana',
        avaliacao: 4.7,
        descricao: 'descrição 2',
        capa: 'img/img.png'
      },
      {
        id: 3,
        titulo: 'restaurante 3',
        destacado: false,
        tipo: 'italiana',
        avaliacao: 4.7,
        descricao: 'descrição 3',
        capa: 'img/img.png'
      }
    ])
  })
)

describe('<CategoryList />', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('should render correctly with loader', () => {
    renderWithProvider(
      <MemoryRouter>
        <CategorytList />
      </MemoryRouter>
    )

    expect(screen.getByTestId('loader-svg')).toBeInTheDocument()
  })
  it('should render correctly after loading', async () => {
    renderWithProvider(
      <MemoryRouter>
        <CategorytList />
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: 'restaurante 2' })
      ).toBeInTheDocument()
    })
  })
})
