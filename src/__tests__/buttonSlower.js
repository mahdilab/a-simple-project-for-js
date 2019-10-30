import React from "react";
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect'


import App from '../App'

jest.useFakeTimers();

describe('ButtonSlower',() => {
  test('after click and more 10 seconds the counter is 5', () => {
    const { getByPlaceholderText, getByText } = render(<App />)
    const counter = getByPlaceholderText('0')

    fireEvent.click(getByText('slower'))
    console.log(counter.textContent)
    act(() => {
      jest.advanceTimersByTime( 2001 )
    })  

    expect(counter).toHaveTextContent('1') 
  })
})
