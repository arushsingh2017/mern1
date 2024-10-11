
import React from 'react'


export default function InsightTab(props) {
    
  return (
      <>
         <div className='InsightTablist'><span><img src={props.icon} alt="" /></span> {props.name}  </div>
       
      </>
  )
}
