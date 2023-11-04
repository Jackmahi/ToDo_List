import React from 'react'

const Per = (props) => {
  return (
    <div className='pre'>
        <h1>{props.rollNo}.</h1>
      <h4>{props.name}</h4>
      <button onClick={()=>props.remove(props.name)}>Remove</button>
    </div>
  )
}

export default Per
