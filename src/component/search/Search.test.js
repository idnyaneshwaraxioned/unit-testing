import {render,fireEvent} from '@testing-library/react';
import Search from './Search';

it("searchRendertext",()=>{
  const {queryByTitle}= render(<Search/>);
  const input = queryByTitle("searcInput");
  expect(input).toBeTruthy();
})
