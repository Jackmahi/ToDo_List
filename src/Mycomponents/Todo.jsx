import React from 'react'

const Todo = (todo) => {
  return (
    <div style={{display:'flex' ,margin:'40px' ,justifyContent:'space-between'}}>
      <h2>{todo.todo.sNo}</h2>
      <h3>{todo.todo.title}</h3>
      <p>{todo.todo.desc}</p>
      <button className='btn btn-danger' style={{width:'60px', height:'40px'}} onClick={()=>todo.ondelete(todo.todo)}>delete</button>
    </div>
  )
}

export default Todo
