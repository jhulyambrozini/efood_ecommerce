import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'

import Category from '..'

const props = {
  image: 'img/img1.png',
  title: 'restaurante',
  type: 'italiana',
  description: 'descrição...',
  detach: true,
  evaluation: 4,
  id: 1
}

const mockUseNavigate = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = (await vi.importActual('react-router-dom')) as any
  return {
    ...actual,
    useNavigate: () => mockUseNavigate
  }
})

describe('<Category />', () => {
  afterEach(() => vi.clearAllMocks())
  it('should render with detach correctly', () => {
    render(
      <MemoryRouter>
        <Category {...props} />
      </MemoryRouter>
    )

    const tagDetach = screen.getByText(/Destaque da semana/i)

    expect(tagDetach).toBeInTheDocument()
  })

  it('should call a function when clicking "Saiba mais"', async () => {
    render(
      <MemoryRouter>
        <Category {...props} />
      </MemoryRouter>
    )

    const knowMoreButton = screen.getByRole('button', { name: /saiba mais/i })

    await waitFor(() => userEvent.click(knowMoreButton))

    expect(mockUseNavigate.mock.calls[0][0]).toBe(`/perfil/${props.id}`)
  })
})
