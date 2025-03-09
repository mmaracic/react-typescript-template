import { expect, test, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
    render(<App />)
 
    test('Header exists', async () => {
        await screen.findByTestId('header')
            .then((element) => {
                console.log(element)
                expect(element).toBeDefined()
            })
            .catch((error) => {
                throw error
            })
    })
})