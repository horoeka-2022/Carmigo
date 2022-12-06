import React from 'react'
import Chats from './Chats'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { getIsAuthenticated } from '../../client/auth0-utils'
import { MemoryRouter } from 'react-router-dom'

jest.mock('../../client/auth0-utils')

test('when the Chats component is rendered, there should be text saying "Mike", "George", and "Jane"', () => {
  // ARRANGE
  getIsAuthenticated.mockImplementation(() => true)
  render(
    <MemoryRouter>
      <Chats />
    </MemoryRouter>
  )

  //ACT

  const mike = screen.getByText('Mike')
  const george = screen.getByText('George')
  const jane = screen.getByText('Jane')

  // ASSERT
  expect(mike).toBeInTheDocument()
  expect(george).toBeInTheDocument()
  expect(jane).toBeInTheDocument()
})

test('when the Chats component is rendered, there should be text saying "1 week ago"', () => {
  // ARRANGE
  getIsAuthenticated.mockImplementation(() => true)
  render(
    <MemoryRouter>
      <Chats />
    </MemoryRouter>
  )

  //ACT

  const send = screen.getByText('1 week ago')

  // ASSERT
  expect(send).toBeInTheDocument()
})
