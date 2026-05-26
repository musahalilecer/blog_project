import React from 'react'

const Input = ({type, className,  placeholder, }) => {
  return (
    <input typeof={type} placeholder={placeholder} className={className}/>
  )
}

export default Input