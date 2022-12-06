import React from 'react'
import Tutorial from './Tutorial'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { getIsAuthenticated } from '../../client/auth0-utils'
import { MemoryRouter } from 'react-router-dom'

jest.mock('../../client/auth0-utils')

test('when the ChatScreen component is rendered, there should be a button called "Start"', () => {
  // ARRANGE
  getIsAuthenticated.mockImplementation(() => true)
  render(
    <MemoryRouter>
      <Tutorial />
    </MemoryRouter>
  )

  //ACT

  const send = screen.getByText("Here's everything you need to know")

  // ASSERT
  expect(send).toBeInTheDocument()
})
