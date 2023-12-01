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
    const { debug } = renderWithProvider(<ProductsList foods={props} />)
    debug()
    const items = screen.getAllByRole('listitem')

    expect(items).toHaveLength(2)
  })
  it('should render a modal when clicking "Mais detalhes"', () => {
    const handleClick = jest.fn()
    renderWithProvider(<ProductsList foods={props} />)

    const moreDetailsButton = screen.getAllByRole('button', {
      name: 'Mais detalhes'
    })[0]
    expect(moreDetailsButton).toBeInTheDocument()

    moreDetailsButton.onclick = handleClick
    fireEvent.click(moreDetailsButton)

    expect(handleClick).toHaveBeenCalled()

    expect(
      screen.getByRole('button', { name: 'Adicionar ao carrinho - R$ 12,70' })
    ).toBeInTheDocument()
  })
  it('should call a function when clicking in "Adicionar ao carrinho"', () => {
    const handleClick = jest.fn()
    renderWithProvider(<ProductsList foods={props} />)

    const moreDetailsButton = screen.getAllByRole('button', {
      name: 'Mais detalhes'
    })[0]

    moreDetailsButton.onclick = handleClick
    fireEvent.click(moreDetailsButton)

    expect(handleClick).toHaveBeenCalledTimes(1)

    const addToCartButton = screen.getByRole('button', {
      name: 'Adicionar ao carrinho - R$ 12,70'
    })

    expect(addToCartButton).toBeInTheDocument()

    addToCartButton.onclick = handleClick

    fireEvent.click(addToCartButton)

    expect(handleClick).toHaveBeenCalledTimes(2)
  })
})
