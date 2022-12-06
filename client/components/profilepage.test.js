import React from 'react'
import ProfilePage from './ProfilePage'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { getIsAuthenticated } from '../../client/auth0-utils'
import { MemoryRouter } from 'react-router-dom'

jest.mock('../../client/auth0-utils')

test('when the ProfilePage component is rendered, there should be text saying "Settings", "Edit Profile", and "Sign Out""', () => {
  // ARRANGE
  getIsAuthenticated.mockImplementation(() => true)
  render(
    <MemoryRouter>
      <ProfilePage />
    </MemoryRouter>
  )

  //ACT

  const settings = screen.getByText('Settings')
  const edit = screen.getByText('Edit Profile')
  const logOff = screen.getByText('Sign Out')

  // ASSERT
  expect(settings).toBeInTheDocument()
  expect(edit).toBeInTheDocument()
  expect(logOff).toBeInTheDocument()
})
