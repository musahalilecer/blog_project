import React from 'react'
import Image from '../atoms/Image'
import { blogs } from '../../data/blogs'
import { useParams } from 'react-router-dom'

const detail = () => {

    const { id } = useParams();
    const blog = blogs.find(b => b.id === Number(id));

  return (
    <div className='ml-20 pl-2 max-w-3xl overflow-hidden border-gray-900 border-2'>
        <div className='p-4 max-w-lg rounded-4xl border-2 '>
            <Image
             src={blog.imageUrl}/>
        </div>
        <div>
            <h2>{blog.name}</h2>
            <h3>{blog.authorName}</h3>
            <h4>{blog.description}</h4>
            <h4>{blog.commentCount}</h4>
            <h5>{blog.date}</h5>
        </div>
    </div>
  )
}

export default detail