import React from 'react'

export default function CheckBoxList({itemname}) {
    // console.log(itemname)
   
  return (
    <div>
      {
        itemname.map(items=>{ return( 
            <>
            <div style={{display:'flex'}} key={items}>
            <div className='left' style={{width:'200px'}}>
               <input type='checkbox' value={items.name} />
               {items.name}
            </div>
             
            <div className='right'>{items.price}</div>
            </div>
            </>
            )}
           
            )
            
          
      }
    </div>
  )
}
