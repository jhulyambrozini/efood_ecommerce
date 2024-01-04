import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Banner from '..'

const props = {
  image: 'img/img1.png',
  title: 'restaurante',
  type: 'italiana'
}

describe('<Banner />', () => {
  it('should be render correctly', () => {
    const { container } = render(<Banner {...props} />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.image
    )
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(screen.getByText(props.type)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
