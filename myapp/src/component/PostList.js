import React from 'react'
import Post from './Post'

export default function PostList({postlistdata}) {
  return (
    <div className='p-5'>
      <Post postlistchild={postlistdata} />
     
    </div>
  )
}
