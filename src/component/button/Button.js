import React, { useState } from 'react';

const Button =()=>{
  const [btnValue,setBtnValue] =useState("Click me");

  const btnHandler = ()=>{
    setBtnValue("Change button text")
  }
  return(
    <div>
      <button onClick={btnHandler} title="dummyButton">{btnValue}</button>
    </div>
  )
}

export default Button