import React from 'react'

const Image = ({src, alt, style}) => {
  return (
    <div>
        <img src={src} alt={alt} />
    </div>
  )
}

export default Image