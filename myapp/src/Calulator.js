import React, { useState } from 'react'
import DisplayData from './component/DisplayData'
import CalButtonContainer from './component/CalButtonContainer'

import style from './Calulator.module.css'
import AddIteam from './component/AddIteam'
import Tabs from './component/Tabs'



export default function Calulator() {


 const tabdata = [
        { name: "Home", link: "#", content: "Home Content" },
        { name: "About", link: "#", content: "About Content" },
        { name: "Contact", link: "#", content: "Contact Content" },
    ];

 
  const inisialdata = [
    {
      pname: "Deepak Singh",
      prices: '$20'
    },
    {
      pname: "Ashu singh",
      prices: '$50'
    },
    {
      pname: "Sandeep singh",
      prices: '$100'
    }
  ]

const[product_name, setProduct_name]=useState()
const[product_prices, setProduct_prices]=useState()

const[productdata, setProductdata]= useState(inisialdata)

function handleAdd(){
    // alert("click me")
    let alldata =({product_name, product_prices})
    const newProductlist= [...productdata, {pname:product_name, prices:product_prices}]
    console.log(newProductlist)
    // setProductdata (newProductlist)
}






    const [calval, setCalval]= useState("qw")
    // const onbutton=(event)=> console.log("click me"+ event)
  return (
    <>

{/* add item  start*/}
 <Tabs tab={tabdata}/>


<h4>Add New Items Using Array Push Method</h4>
      <div className='row mb-4'>
          <div className='col-lg-6'>
              <input type='text' className='form-control' placeholder='Enter Product Name' onChange={(e)=>setProduct_name(e.target.value)}/>
          </div>
          <div className='col-lg-4'>
              <input type='text' className='form-control' placeholder='Product Price' onChange={(e)=>setProduct_prices(e.target.value)}/>
          </div>
          <div className='col-lg-2'>
            <button className='btn btn-success' onClick={handleAdd}>Add New Item</button>
          </div>
      </div>
    <ul className="list-group" >
      {
        inisialdata.map((ii)=>{
            return(
                <>
                <li className="list-group-item" style={{display:'flex', justifyContent:'space-between'}} key={ii.pname}>{ii.pname}  <div className=''>{ii.prices}</div></li>
                </>
            )
        })
      }
      </ul>

{/* end */}

      {/* <AddIteam/> */}
      <div className={style.calWrap}>
      <DisplayData />
      <CalButtonContainer/>
    </div>
    </>
    
  )
}
