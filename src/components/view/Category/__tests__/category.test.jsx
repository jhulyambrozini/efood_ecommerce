import '@testing-library/jest-dom'
import { fireEvent, render, screen } from "@testing-library/react"
import {vi} from 'vitest'
import { MemoryRouter } from "react-router-dom"

import Category from '..'

const props = {
    image: 'img/img1.png',
    title: 'restaurante',
    type: 'italiana',
    description: 'descrição...',
    detach: true,
    evaluation: 4,
    id: 1
}

describe('<Category />', () => {
    it('should render with detach correctly', () => {
        render(<MemoryRouter>
            <Category {...props} />
        </MemoryRouter>)

        const tagDetach = screen.getByText(/Destaque da semana/i)
        
        expect(tagDetach).toBeInTheDocument()
    })

    it('should call a function when clicking "Saiba mais"', () => {
        const handleClick = vi.fn()
        render(<MemoryRouter>
            <Category {...props} />
        </MemoryRouter>)

        const knowMoreButton = screen.getByRole('button', { name: /saiba mais/i })
        
        expect(knowMoreButton).toBeInTheDocument()

        knowMoreButton.onclick = handleClick

        fireEvent.click(knowMoreButton)
        expect(handleClick).toHaveBeenCalled()
    })
})