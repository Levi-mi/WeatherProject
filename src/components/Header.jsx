import React from 'react'

const Header = (props) => {
  return (
    <div className="container">
        <div className='text-center'>
          <h1>{props.title}</h1>
        </div>
    </div>
    
  )
}

export default Header