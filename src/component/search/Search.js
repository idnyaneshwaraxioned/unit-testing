import React, { useState } from 'react';
import { makeLowerCase } from '../../helper/HelpingFunction';

const Search =()=>{
  const [searchValue,setSearchValue] =useState("");

  const textHandler = (e)=>{
    setSearchValue(e.target.value)
  }
  return(
    <div>
      <input type="text" value={searchValue} onChange={textHandler} title="searcInput"/>
      <h1>
        {
          makeLowerCase(searchValue)
        }
      </h1>
    </div>
  )
}

export default Search