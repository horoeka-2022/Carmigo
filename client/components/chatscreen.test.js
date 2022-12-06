import React from 'react'
import ChatScreen from './ChatScreen'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

test('when the ChatScreen component is rendered, there should be a button called "SEND"', () => {
  // ARRANGE
  render(<ChatScreen />)

  //ACT
  const send = screen.getByText('SEND')

  // ASSERT
  expect(send).toBeInTheDocument()
})
