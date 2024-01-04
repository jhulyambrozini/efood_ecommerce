import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import { screen, waitFor } from '@testing-library/react'

import CategorytList from '..'
import { renderWithProvider } from '../../../../utils/redux-store-tests'

import { server } from '../../../../mocks/api/index-server'

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
        screen.getByRole('heading', { name: 'restaurante 1' })
      ).toBeInTheDocument()
    })
  })
})
