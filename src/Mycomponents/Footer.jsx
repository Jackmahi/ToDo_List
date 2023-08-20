import React from 'react'

const Footer = () => {

  let footerstyle={
    position: 'relative',
    bottom: '0',
    width: '100%'
  }

  return (
    <footer className='bg-dark text-light'style={footerstyle}>
      <p className="text-center">Copyright &copy; MyTodoList.com</p>
     
    </footer>
  )
}

export default Footer
