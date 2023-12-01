import Home from '..'
import { MemoryRouter } from 'react-router-dom'
import { renderWithProvider } from '../../../utils/tests'
import { screen } from '@testing-library/dom'

describe('<Home />', () => {
  it('should be render correctly', () => {
    renderWithProvider(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { name: 'EFOOD' })).toBeInTheDocument()
  })
})
