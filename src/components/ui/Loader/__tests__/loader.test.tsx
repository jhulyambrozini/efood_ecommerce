import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Loader from '..'

describe('<Loader />', () => {
  it('should render the loader', () => {
    render(<Loader />)
    expect(screen.getByTestId('loader-svg'))
  })
})
