import React, { useState } from 'react'

const Add = ({ list, setList, elements, setElements}) => {

  const [ input, setInput ] = useState('');

  const handleAdd = () => {
    if(input === '') return;
    const newElement = input;
    setList([...list, newElement]);
    setElements([...elements, newElement])
    setInput('');
  }

  const handleKeyDown = (event) => {
    if(event.key === 'Enter'){
      event.preventDefault();
      const newElement = input;
      setList([...list, newElement]);
      setElements([...elements, newElement])
      setInput('');
    }
  }

  return (
    <div className='add-container'>
      <input
        placeholder='Add new task'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Add