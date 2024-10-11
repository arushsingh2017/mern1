import React from 'react'

export default function TodoItem({nama, ddate}) {
  return (
    <div>
      <p>{nama}</p> || <p>{ddate}</p>
    </div>
  )
}
