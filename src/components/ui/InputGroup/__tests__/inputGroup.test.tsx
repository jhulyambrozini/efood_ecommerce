import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import InputGroup from '..'

describe('<InputGroup />', () => {
  it('should render correctly', () => {
    render(<InputGroup label="name" id="name" />)
    expect(screen.getByRole('input-group')).toBeInTheDocument()
  })

  it('should be a input with a mask', () => {
    render(<InputGroup label="name" id="name" mask="9-9" />)

    const input = screen.getByRole('textbox')
    fireEvent.change(input, {
      target: {
        value: '9-9'
      }
    })
    expect(input).toHaveValue('9-9')
  })

  it('should be a input without a mask', () => {
    render(<InputGroup label="name" id="name" />)

    const input = screen.getByRole('textbox')
    fireEvent.change(input, {
      target: {
        value: 'testando'
      }
    })
    expect(input).toHaveValue('testando')
  })

  it('should render a chidren message', () => {
    render(
      <InputGroup label="name" id="name">
        mensagem de erro
      </InputGroup>
    )
    expect(screen.getByText('mensagem de erro'))
  })

  it('should be render with a maxWidth=93px', () => {
    render(<InputGroup label="name" id="name" maxWidth="93px" />)

    const input = screen.getByRole('textbox')
    expect(input).toHaveStyle('max-width: 93px')
  })

  it('should match snapshot', () => {
    const { container } = render(
      <InputGroup label="name" id="name" maxWidth="96px">
        mensagem de erro
      </InputGroup>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
