import React, { useEffect, useState } from 'react'
import Search from './components/Search';
import Add from './components/Add';
import List from './components/List';
import './app.css'

const App = () => {
  const [list, setList] = useState([]);
  const [elements, setElements] = useState([]);

  return (
    <div className='container'>
      <h1>To do List</h1>
      <Search
        list={list}
        setList={setList}
        elements={elements}
      />
      <Add
        list={list}
        setList={setList}
        elements={elements}
        setElements={setElements}
      />
      <List
        list={list}
        setList={setList}
        elements={elements}
        setElements={setElements}
      />
    </div>
  )
}

export default App