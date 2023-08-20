import React, { useState } from 'react';
import Todo from './Todo';


const Todos = (props) => {
const mystyle ={
   minHeight: '70vh',
   width:'70%',
  background:'linear-gradient(to top, #feada6 0%, #f5efef 100%)'
}
  return (
    <div className='container' style={mystyle}>
      <h3 className='text-center my-3'>ToDo List</h3>

      {props.todos.length === 0 ? (
         <p style={{textAlign:'center',fontSize:'26px',color:'lightGray'}}>Add New Task</p>
      ) : (
        props.todos.map((todo) => (
          <Todo todo={todo} key={todo.sNo} ondelete={props.ondelete} />
        ))
      )}
    </div>
  );
}

export default Todos;


