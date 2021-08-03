import {render,fireEvent} from '@testing-library/react';
import Button from './Button';

it('checkButtonRender',()=>{
  const {queryByTitle}= render(<Button/>);
  const btn = queryByTitle("dummyButton");
  expect(btn).toBeTruthy();
})

describe("clickButton",()=>{
  it('onClick',()=>{
    const {queryByTitle}= render(<Button/>);
    const btn = queryByTitle("dummyButton");
    // expect(btn.innerHTML).toBe("Button Clicked")
    expect(btn.innerHTML).toBe("Click me")
    fireEvent.click(btn)
  })
})