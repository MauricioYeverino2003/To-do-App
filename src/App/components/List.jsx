import React from 'react'
import Element from './Element';

const List = ({list, setList, elements, setElements}) => {

  const handleDelete = (element) => {
    const newList = list.filter((e) => (e !== element));
    setList(newList);
    const newElements = elements.filter((e)=>(e !== element));
    setElements(newElements);
  }

  return (
    <div className='list-container'>
      <ul>
        {list.map((element, id) =>{
          return(
            <Element
              key={id}
              element={element}
              handleDelete={handleDelete}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default List