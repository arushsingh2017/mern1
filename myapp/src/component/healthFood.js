import React from 'react'
import PlayBtn from './PlayBtn'
import ItemNotFound from './ItemNotFound'
import { useState } from 'react'

export default function HealthFood() {
    //const [txtval, settxtval]= useState("one")
    // console.log("current value is " +txtval)
    const [healthitem, sethealthitem] = useState(["onw", "two", "Three"] )
    // const healthitem=['Dal', 'Sugar']
    // const [healthitem, sethealthitem]= useState()
    // const healthitem =[
    //     {
    //         id:'1',
    //         name:'Dal',
    //         price:'12'
    //     },
    //     {
    //         id:'2',
    //         name:'Sugar',
    //         price:'120'
    //     },
    // ]

const handerBuyProduct = (id) =>{
       // console.log(`${id.price} you click on`)
       alert(`Hi user ! you click on ${id}`)
}

function getinputval(e)
{  //console.log()
  // let aa=  e.target.value
    
    // console.log ("you enetr is " + txtval )
   
}
function handleronchange(e){
   // console.log(e)
   if (e.key === "Enter"){
    let newval = e.target.value;
    e.target.value =" "
   // settxtval()
  // console.log(newval)
   let newhealthitem= [...healthitem, newval ]
  // console.log(newhealthitem)
  sethealthitem(newhealthitem)
   }
   
}

  return (
   <>
   <div className='container'>
       <h4 className='text-center'>Health Food</h4>
       <input type="text" placeholder='Enter New Item' onKeyDown={handleronchange}    />
       <button className='btn btn-primary' onClick={getinputval} >Add</button>
       {/* <p>{txtval}</p> */}
       {
        healthitem.length === 0 &&  <ItemNotFound/> 
       }
       <ul className='list-group'>
        {
            healthitem.map(item=> 
            <li className='list-group-item d-flex justify-content-between align-items-center' key={item}>
              {item} <span className='badge badge-primary badge-pill bg-info'>{item.price}/Kg</span> 
            <button onClick={()=>handerBuyProduct(item)} className='btn btn-primary'>Buy Now!</button>
            </li>)
        }
       </ul>
   </div>
   </>
  )
}
