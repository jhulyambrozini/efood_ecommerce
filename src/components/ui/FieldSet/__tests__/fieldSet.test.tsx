import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { FieldSet } from '..'

describe('<FieldSet />', () => {
  it('should render correctly', () => {
    render(
      <FieldSet.Root>
        <FieldSet.Label id="name" label="Nome" />
        <FieldSet.Input id="name" required="true" type="text" />
      </FieldSet.Root>
    )

    expect(screen.getByText('Nome')).toBeInTheDocument()
  })

  it('should render correctly with input mask', () => {
    render(
      <FieldSet.Root>
        <FieldSet.Label id="month" label="Mês" />
        <FieldSet.InputMask mask="9-9" id="month" required="true" type="text" />
      </FieldSet.Root>
    )

    const inputMask = screen.getByRole('textbox', { name: 'Mês' })

    fireEvent.change(inputMask, { target: { value: '00' } })

    expect(inputMask).toHaveValue('0-0')
  })
  it('should render an error message when receiving a error', () => {
    render(
      <FieldSet.Root>
        <FieldSet.Label id="month" label="Mês" />
        <FieldSet.InputMask mask="9-9" id="month" required="true" type="text" />
        <FieldSet.ErrorMessage errorMessage="O campo é obrigatório" />
      </FieldSet.Root>
    )

    expect(screen.getByText('O campo é obrigatório')).toBeInTheDocument()
  })
  it('should correctly receive the change event', () => {
    render(
      <FieldSet.Root>
        <FieldSet.Label id="name" label="Nome" />
        <FieldSet.Input id="name" required="true" type="text" />
      </FieldSet.Root>
    )

    const input = screen.getByRole('textbox', { name: 'Nome' })

    fireEvent.change(input, { target: { value: 'Ana' } })

    expect(input).toHaveValue('Ana')
  })
})
