import {makeLowerCase} from './HelpingFunction';

test("makeLowerCase",()=>{
  expect(makeLowerCase("DNYAnu")).toBe("dnyanu");
  expect(makeLowerCase("InCHale")).toBe("inchale");
});