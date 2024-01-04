import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import { fireEvent, screen, waitFor } from '@testing-library/dom'

import { renderWithProvider } from '../../../../utils/redux-store-tests'
import Form from '../FormContainer'

import { server } from '../../../../mocks/api/index-server'

describe('<Form />', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('should render delivery correctly', () => {
    renderWithProvider(<Form />)
    expect(screen.getByRole('heading', { name: 'Entrega' })).toBeInTheDocument()
  })

  it('should render an error message when clicking button with empty inputs', () => {
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

    fireEvent.click(KeepWithPaymentButton)

    expect(
      screen.getByText('Preencha todos os campos obrigatórios!')
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

  it('should return to address editing when you clicking "Voltar para a edição de endereço"', () => {
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

    const backToAdressButton = screen.getByRole('button', {
      name: 'Voltar para a edição de endereço'
    })

    fireEvent.click(backToAdressButton)

    expect(screen.getByRole('heading', { name: 'Entrega' })).toBeInTheDocument()
  })
})
