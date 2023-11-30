import { screen } from '@testing-library/dom'
import Tag from '.'
import { render } from '@testing-library/react'

describe('<Tag />', () => {
  it('should be render with the text "destaque"', () => {
    render(<Tag text="destaque" />)

    expect(screen.findByRole('tag-container', { name: /destaque/i }))
  })
})
