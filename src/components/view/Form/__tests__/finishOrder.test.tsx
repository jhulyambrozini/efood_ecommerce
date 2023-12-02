import '@testing-library/jest-dom'
import { vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { renderWithProvider } from '../../../../utils/tests'
import FinishOrder from '../FinishOrder'
import { fireEvent, screen } from '@testing-library/dom'

describe('<FinishOrder />', () => {
  it('should render correctly', () => {
    renderWithProvider(
      <MemoryRouter>
        <FinishOrder orderId="84456" />
      </MemoryRouter>
    )

    const heading = screen.getByRole('heading', {
      name: 'Pedido realizado - 84456'
    })
    expect(heading).toBeInTheDocument()
  })

  it('should call a function when clicking "Concluir o pedido"', () => {
    const handleClick = vi.fn()
    renderWithProvider(
      <MemoryRouter>
        <FinishOrder orderId="84456" />
      </MemoryRouter>
    )
    const completeOrderButton = screen.getByRole('button', {
      name: /Concluir o pedido/i
    })

    expect(completeOrderButton).toBeInTheDocument()

    completeOrderButton.onclick = handleClick
    fireEvent.click(completeOrderButton)

    expect(handleClick).toHaveBeenCalled()
  })
})
