import React from 'react'
import Image from '../atoms/Image'

const Card = () => {
    // id, imageUrl, description, date, commentCount, authorName, authorProfileUrl
  return (
    <section className>
        <div>
            <div>
                <Image />
            </div>
            <div>
                <Image src={'authorprofile'}/>
                <h3>Author Name</h3>
                <h4>Description</h4>
                <h6>date</h6>
            </div>
        </div>
    </section>
  )
}

export default Card;