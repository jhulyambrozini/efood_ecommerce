import '@testing-library/jest-dom'
import { fireEvent, screen } from '@testing-library/dom'
import { vi } from 'vitest'
import Cart from '..'
import { renderWithProvider } from '../../../../utils/tests'

const itemsCart = [
  {
    foto: 'img/img.png',
    preco: 12.7,
    id: 1,
    nome: 'comida 1',
    descricao: 'descrição 1',
    porcao: '2 pessoas'
  },
  {
    foto: 'img/img.png',
    preco: 129,
    id: 2,
    nome: 'comida 2',
    descricao: 'descrição 2',
    porcao: '2 pessoas'
  }
]

describe('<Cart />', () => {
  it('should render without itens', () => {
    renderWithProvider(<Cart itemsCart={[]} />)

    expect(screen.getByTestId('paragraph')).toBeInTheDocument()
  })

  it('should render with 2 items in cart', () => {
    renderWithProvider(<Cart itemsCart={itemsCart} />)

    const heading1 = screen.getByRole('heading', { name: 'comida 1' })
    const heading2 = screen.getByRole('heading', { name: 'comida 2' })
    expect(heading1).toBeInTheDocument()
    expect(heading2).toBeInTheDocument()
  })

  it('should call a function when clicking on the trash button', () => {
    const handleRemove = vi.fn()
    renderWithProvider(
      <Cart
        itemsCart={[
          {
            foto: 'img/img.png',
            preco: 12.7,
            id: 1,
            nome: 'comida 1',
            descricao: 'descrição 1',
            porcao: '2 pessoas'
          }
        ]}
      />
    )

    const trashButton = screen.getByRole('button', {
      name: 'icone de lixeira da cor rosa'
    })

    trashButton.onclick = handleRemove
    fireEvent.click(trashButton)

    expect(handleRemove).toHaveBeenCalled()
  })

  it('should call a function when clicking continue with delivery', () => {
    const handleClick = vi.fn()
    renderWithProvider(<Cart itemsCart={itemsCart} />)

    const keepWithDeliveryButton = screen.getByRole('button', {
      name: /Continuar com a entrega/i
    })
    expect(keepWithDeliveryButton).toBeInTheDocument()

    keepWithDeliveryButton.onclick = handleClick

    fireEvent.click(keepWithDeliveryButton)

    expect(handleClick).toHaveBeenCalled()
  })
})
