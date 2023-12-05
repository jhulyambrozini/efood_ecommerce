import '@testing-library/jest-dom'
import { vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import Button from '..'

describe('<Button />', () => {
  it('should render a primary button"', () => {
    render(
      <Button
        label="button primary"
        background="primary"
        type="button"
        title="click me"
      />
    )
    const buttonPrimary = screen.getByRole('button', {
      name: /button primary/i
    })
    expect(buttonPrimary).toHaveStyle('color:  rgb(255, 235, 217)')
  })

  it('should render a secondary button"', () => {
    render(
      <Button
        label="button secondary"
        background="secundary"
        type="button"
        title="click me"
      />
    )
    const buttonSecondary = screen.getByRole('button', {
      name: /button secondary/i
    })
    expect(buttonSecondary).toHaveStyle('color:   rgb(177, 57, 57)')
  })

  it('should call function on button click', () => {
    const handleClick = vi.fn()
    render(
      <Button
        label="button"
        background="secundary"
        type="button"
        title="click me"
        onClick={handleClick}
      />
    )
    const button = screen.getByRole('button', {
      name: /button/i
    })
    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should match snapshot', () => {
    const handleClick = vi.fn()

    const { container } = render(
      <Button
        label="button"
        background="secundary"
        type="button"
        title="click me"
        onClick={handleClick}
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
