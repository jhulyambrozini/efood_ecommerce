import '@testing-library/jest-dom'
import { fireEvent, screen } from '@testing-library/dom'

import ProductsList from '..'
import { renderWithProvider } from '../../../../utils/tests'

const props = {
  id: 1,
  titulo: 'restaurante 1',
  destacado: true,
  tipo: 'italiano',
  avaliacao: 4,
  descricao: 'descicao',
  capa: 'img/img.png',
  cardapio: [
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
}

describe('<ProductList />', () => {
  it('should render with 2 items on the cardapio', () => {
    renderWithProvider(<ProductsList foods={props} />)

    const items = screen.getAllByRole('listitem')

    expect(items).toHaveLength(2)
  })

  it('should render a modal when clicking "Mais detalhes"', () => {
    renderWithProvider(<ProductsList foods={props} />)

    const moreDetailsButton = screen.getAllByRole('button', {
      name: 'Mais detalhes'
    })[0]
    expect(moreDetailsButton).toBeInTheDocument()

    fireEvent.click(moreDetailsButton)

    expect(
      screen.getByRole('button', { name: 'Adicionar ao carrinho - R$ 12,70' })
    ).toBeInTheDocument()
  })

  it('should add item to cart when clicking in "Adicionar ao carrinho"', () => {
    const { store } = renderWithProvider(<ProductsList foods={props} />)

    const moreDetailsButton = screen.getAllByRole('button', {
      name: 'Mais detalhes'
    })[0]

    fireEvent.click(moreDetailsButton)

    const addToCartButton = screen.getByRole('button', {
      name: 'Adicionar ao carrinho - R$ 12,70'
    })

    fireEvent.click(addToCartButton)

    expect(store.getState().cart.itemsCart[0].nome).toBe('comida 1')
  })
})
