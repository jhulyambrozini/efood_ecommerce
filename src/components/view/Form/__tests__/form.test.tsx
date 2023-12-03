import '@testing-library/jest-dom'
import { vi } from 'vitest'
import { renderWithProvider } from '../../../../utils/tests'
import Form from '../FormContainer'
import { fireEvent, screen, waitFor } from '@testing-library/dom'
import { setupServer } from 'msw/node'
import { HttpResponse, http } from 'msw'
import { act } from '@testing-library/react'

// const server = setupServer(
//   http.post(
//     'https://fake-api-tau.vercel.app/api/efood/checkout',
//     async ({ request }) => {
//       const {} = await request.json()
//       return HttpResponse.json({ author, text }, { status: 201 })
//     }
//   )
// )

describe('<Form />', () => {
  // beforeAll(() => server.listen())
  // afterEach(() => server.resetHandlers())
  // afterAll(() => server.close())

  it('should render delivery correctly', () => {
    renderWithProvider(<Form />)
    expect(screen.getByRole('heading', { name: 'Entrega' })).toBeInTheDocument()
  })

  it('should render an error message when clicking button with empty inputs', () => {
    const handleClick = vi.fn()
    renderWithProvider(<Form />)

    const inputName = screen.getByRole('textbox', {
      name: 'Quem irá receber*'
    })
    const inputAdress = screen.getByRole('textbox', { name: 'Endereço*' })
    const inputCity = screen.getByRole('textbox', { name: 'Cidade*' })
    const inputCPF = screen.getByRole('textbox', { name: 'CPF*' })
    const inputNúmero = screen.getByRole('spinbutton', { name: 'Número*' })

    fireEvent.change(inputName, { target: { value: '' } })
    fireEvent.change(inputAdress, { target: { value: '' } })
    fireEvent.change(inputCity, { target: { value: '' } })
    fireEvent.change(inputCPF, { target: { value: '' } })
    fireEvent.change(inputNúmero, { target: { value: '' } })

    const KeepWithPaymentButton = screen.getByRole('button', {
      name: 'Continuar com o pagamento'
    })

    KeepWithPaymentButton.onclick = handleClick

    fireEvent.click(KeepWithPaymentButton)

    expect(
      screen.getByText('Preencha os campos obrigatórios!')
    ).toBeInTheDocument()
  })

  it('should render payment div when clicking "Continuar com o pagamento"', () => {
    const handleClick = vi.fn()
    renderWithProvider(<Form />)

    const inputName = screen.getByRole('textbox', {
      name: 'Quem irá receber*'
    })
    const inputAdress = screen.getByRole('textbox', { name: 'Endereço*' })
    const inputCity = screen.getByRole('textbox', { name: 'Cidade*' })
    const inputCPF = screen.getByRole('textbox', { name: 'CPF*' })
    const inputNúmero = screen.getByRole('spinbutton', { name: 'Número*' })

    fireEvent.change(inputName, { target: { value: 'ananjulia' } })
    fireEvent.change(inputAdress, { target: { value: 'endereço aleatorio' } })
    fireEvent.change(inputCity, { target: { value: 'ciadade ai' } })
    fireEvent.change(inputCPF, { target: { value: '999.999.999-99' } })
    fireEvent.change(inputNúmero, { target: { value: 12 } })

    const KeepWithPaymentButton = screen.getByRole('button', {
      name: 'Continuar com o pagamento'
    })

    KeepWithPaymentButton.onclick = handleClick

    fireEvent.click(KeepWithPaymentButton)

    expect(handleClick).toHaveBeenCalled()

    expect(screen.getByTestId('payment')).toBeInTheDocument()
  })

  it('should return to the cart when clicking "Voltar ao carrinho"', () => {
    const handleClick = vi.fn()
    const { debug } = renderWithProvider(<Form />)

    const backToCartButton = screen.getByRole('button', {
      name: 'Voltar ao carrinho'
    })

    backToCartButton.onclick = handleClick

    fireEvent.click(backToCartButton)

    expect(handleClick).toHaveBeenCalled()

    debug()
    // expect(screen.getByText('O carrinho está vazio')).toBeInTheDocument()
  })

  it('should back to delivery when clicking "Voltar para a edição de endereço"', () => {
    renderWithProvider(<Form />)
  })
})
