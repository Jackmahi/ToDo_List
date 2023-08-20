import React from 'react'

const Header = (props) => {
  const navstyle={
    background: 'linear-gradient(90deg, #0a0a0a 0%, #d6f9b3 100%)',
    padding:'10px',
    textAlign:'center'
  }

  return (
    <>
      <h2 style={navstyle}>My ToDo List</h2>
</>
  )
}

export default Header
