import React, { useState, useEffect } from 'react'

const Search = ({list, setList, elements}) => {

  const [ input, setInput ] = useState('');
  
  useEffect(() => {
    if(elements.length === 0) return;
    if(input === ''){
      setList(elements);
      return;
    }
    const value = input;
    const newList = elements.filter((element) => element.toLowerCase().includes(value.toLocaleLowerCase()));
    setList(newList);
  }, [input]);

  //not sure if I need this
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <div className='search-container'>
      <input
        placeholder='Find tasks'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default Search