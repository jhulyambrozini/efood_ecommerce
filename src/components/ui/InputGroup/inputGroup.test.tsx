import { render, screen } from '@testing-library/react'
import InputGroup from '.'

const props = {
  label: 'name',
  id: 'name',
  mask: '999-9'
}

describe('<InputGroup />', () => {
  it('should render correctly', () => {
    render(<InputGroup {...props} />)
    expect(screen.findAllByRole('input-group'))
  })

  it('should be a input without a mask', () => {
    render(<InputGroup {...props} />)
    // expect(screen.getByRole('textbox', { value:  }))
  })

  it('should be a input with a mask', () => {})
})
