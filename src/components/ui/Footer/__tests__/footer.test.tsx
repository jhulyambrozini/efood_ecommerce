import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import Footer from '..'

describe('<Footer />', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )
    expect(screen.getByAltText('EFOOD'))
  })
  it('should match snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
