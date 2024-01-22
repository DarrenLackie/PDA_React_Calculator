import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should be able to add', () => {
    const button4 = container.getByTestId('number4')
    const buttonAdd = container.getByTestId('operator-add')
    const button1 = container.getByTestId('number1')
    const buttonEquals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button4)
    fireEvent.click(buttonAdd)
    fireEvent.click(button1)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('5')
  })

  it('should be able to subtract', () => {
    const button7 = container.getByTestId('number7')
    const buttonSubtract = container.getByTestId('operator-subtract')
    const button4 = container.getByTestId('number4')
    const buttonEquals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button7)
    fireEvent.click(buttonSubtract)
    fireEvent.click(button4)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should be able to multiply', () => {
    const button3 = container.getByTestId('number3')
    const buttonMultiply = container.getByTestId('operator-multiply')
    const button5 = container.getByTestId('number5')
    const buttonEquals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button3)
    fireEvent.click(buttonMultiply)
    fireEvent.click(button5)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('15')
  })

  it('should be able to divide', () => {
    const button2 = container.getByTestId('number2')
    const button1 = container.getByTestId('number1')
    const buttonDivide = container.getByTestId('operator-divide')
    const button3 = container.getByTestId('number3')
    const buttonEquals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(buttonDivide)
    fireEvent.click(button3)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('7')
  })

  it('should be able to concatenate numbers', () => {
    const button2 = container.getByTestId('number2')
    const button1 = container.getByTestId('number1')
    const button3 = container.getByTestId('number3')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(button3)
    expect(runningTotal.textContent).toEqual('213')
  })

  it('should be able to chain multiple operations together', () => {
    const button2 = container.getByTestId('number2')
    const button1 = container.getByTestId('number1')
    const buttonDivide = container.getByTestId('operator-divide')
    const button3 = container.getByTestId('number3')
    const buttonAdd = container.getByTestId('operator-add')
    const buttonEquals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(buttonDivide)
    fireEvent.click(button3)
    fireEvent.click(buttonAdd)
    fireEvent.click(button3)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('10')
  })

  it('should be able to clear without affecting calculation', () => {
    const button2 = container.getByTestId('number2')
    const button1 = container.getByTestId('number1')
    const buttonAdd = container.getByTestId('operator-add')
    const buttonClear = container.getByTestId('clear')
    const buttonEquals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button2)
    fireEvent.click(buttonAdd)
    fireEvent.click(button1)
    fireEvent.click(buttonAdd)
    fireEvent.click(button2)
    fireEvent.click(buttonClear)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('3')
  })

})