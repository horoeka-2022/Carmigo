import React from 'react'
import AddPhotos from './AddPhotos'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

test('when the AddPhoto component is rendered, there should be text called "Tell us more about your car" and "Continue to Instructions"', () => {
  // ARRANGE
  render(<AddPhotos />)

  //ACT
  const tellUs = screen.getByText('Tell us more about your car')
  const instructions = screen.getByText('Continue to Instructions')

  // ASSERT
  expect(tellUs).toBeInTheDocument()
  expect(instructions).toBeInTheDocument()
})
