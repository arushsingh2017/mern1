import React from 'react'
import ChildC from './ChildC'

export default function ChildB() {
  return (
    <div>
      <h6>Hi I am child B Component </h6>
           
       <ChildC />

      {/* {
        plist.map(itemlist=> <span>{itemlist.name} || </span>)
      } */}

    </div>
  )
}
