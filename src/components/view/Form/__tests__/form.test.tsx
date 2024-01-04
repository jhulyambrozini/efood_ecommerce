import '@testing-library/jest-dom'
import { vi } from 'vitest'
import { fireEvent, screen, waitFor } from '@testing-library/dom'
import { setupServer } from 'msw/node'
import { HttpResponse, http } from 'msw'
import { MemoryRouter } from 'react-router-dom'

import { renderWithProvider } from '../../../../utils/tests'
import Form from '../FormContainer'

const server = setupServer(
  http.post('https://fake-api-tau.vercel.app/api/efood/checkout', async () => {
    const orderId = '123456'
    return HttpResponse.json({ orderId }, { status: 201 })
  })
)

describe('<Form />', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

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

    fireEvent.click(KeepWithPaymentButton)

    expect(
      screen.getByRole('heading', { name: 'Pagamento - Valor a pagar R$ 0,00' })
    ).toBeInTheDocument()
  })

  it('should return to the cart when clicking "Voltar ao carrinho"', () => {
    const { store } = renderWithProvider(<Form />)

    const backToCartButton = screen.getByRole('button', {
      name: 'Voltar ao carrinho'
    })

    fireEvent.click(backToCartButton)

    expect(store.getState().sideBar.component).toEqual('cart')
  })

  it('should render finishOrder component when form is submitted', async () => {
    renderWithProvider(
      <MemoryRouter>
        <Form />
      </MemoryRouter>,
      {
        preloadedState: {
          cart: {
            itemsCart: [
              {
                foto: 'img/img.png',
                preco: 12.7,
                id: 1,
                nome: 'comida 1',
                descricao: 'descricao 1',
                porcao: '2'
              }
            ]
          }
        }
      }
    )

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

    fireEvent.click(KeepWithPaymentButton)

    const inputCardName = screen.getByRole('textbox', {
      name: 'Nome no cartão*'
    })
    const inputCardNumber = screen.getByRole('textbox', {
      name: 'Número do cartão*'
    })
    const inputCVV = screen.getByRole('textbox', { name: 'CVV*' })
    const inputExpiresMonth = screen.getByRole('textbox', {
      name: 'Mês de expiração*'
    })
    const inputExpiresYear = screen.getByRole('textbox', {
      name: 'Ano de expiração*'
    })

    fireEvent.change(inputCardName, { target: { value: 'ananjulia' } })
    fireEvent.change(inputCardNumber, {
      target: { value: '9999 9999 9999 9999' }
    })
    fireEvent.change(inputCVV, { target: { value: '999' } })
    fireEvent.change(inputExpiresMonth, { target: { value: '9' } })
    fireEvent.change(inputExpiresYear, { target: { value: '12' } })

    const finishPayment = screen.getByTestId('form')

    await waitFor(() => {
      fireEvent.submit(finishPayment)
    })

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Pedido realizado - 123456' }))
    })
  })

  // voltar para edição de endereço
  it('should return to address editing when you clicking "Voltar para a edição de endereço"', () => {
    const handleClick = vi.fn()
    renderWithProvider(
      <MemoryRouter>
        <Form />
      </MemoryRouter>,
      {
        preloadedState: {
          cart: {
            itemsCart: [
              {
                foto: 'img/img.png',
                preco: 12.7,
                id: 1,
                nome: 'comida 1',
                descricao: 'descricao 1',
                porcao: '2'
              }
            ]
          }
        }
      }
    )

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

    const backToAdressButton = screen.getByRole('button', {
      name: 'Voltar para a edição de endereço'
    })

    backToAdressButton.onclick = handleClick
    fireEvent.click(backToAdressButton)

    expect(screen.getByRole('heading', { name: 'Entrega' })).toBeInTheDocument()
  })
})
