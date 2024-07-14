import React from 'react'

const Element = ({element, handleDelete}) => {

  const removeElement = () => {
    handleDelete(element)
  }

  return (
      <li>
        <div className='element-container'>
          <div>{element}</div><button onClick={removeElement}>Done</button>
        </div>
      </li>
  )
}

export default Element