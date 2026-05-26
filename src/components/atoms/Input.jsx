import React from 'react'

const Input = ({ type = 'text', className = '', placeholder = '', value, onChange, name, id, required }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      required={required}
    />
  )
}

export default Input