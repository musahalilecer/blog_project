import React from 'react'

const Image = ({src, alt, style}) => {
  return (
    <div>
        <img className={style} src={src} alt={alt} />
    </div>
  )
}

export default Image