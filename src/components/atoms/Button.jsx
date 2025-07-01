import React from 'react'

const Button = ({style, type, childeren, }) => {
  return (
    <div>
      <button className={style} type={type}>
        {childeren}  
      </button>
    </div>
  )
}

export default Button