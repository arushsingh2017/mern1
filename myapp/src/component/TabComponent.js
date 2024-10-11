import React, { useState } from 'react'

export default function TabComponent() {
    const[tabname, settabname]= useState('')
    const[tablink, settablink]= useState('')
    const[tabcontent, settabcontent]= useState('')

    const tabnameHandler=(e)=>{
       settabname(e.target.value)
    }
    const tablinkHandler=(e)=>{
        settablink(e.target.value)
     }
     const tabcontentHandler=(e)=>{
        settabcontent(e.target.value)
     }
    const handlerSave = async()=>{
       
        let alldata= {name:tabname, link:tablink, content:tabcontent}
        //console.log(`data is: ${tabname} ${tablink} ${tabcontent}`)
          let res= await fetch('http://localhost:4400/addtabdata',{
            method:'post',
            body:JSON.stringify(alldata),
            headers:{'Content-Type':'application/json'},
          });
          res= await res.json();
    //  console.log(result);
     if(res){
        alert("one Record is saved")
     } else{
      alert("try more time")
     }

     settabname('');
     settablink('');
     settabcontent('');

    }
    return (
        <div className='container pt-5 pb-5'>
            <h2>Adding Tab Data</h2>
            <div className='row'>
                <div className='col-sm-6'>
                    <input type='text' value={tabname} className='form-control' onChange={tabnameHandler} placeholder='Enter Tab Name' />
                </div>
                <div className='col-sm-6'>
                    <input type='text' value={tablink} className='form-control' onChange={tablinkHandler} placeholder='Enter Tab Link' />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12 mt-4'>
                    <textarea  value={tabcontent} className='form-control' rows="5" onChange={tabcontentHandler} placeholder='Enter Content' />
                </div>
            </div>
            <button className='btn btn-primary mt-4' onClick={handlerSave}>Save Data</button>
        </div>
    )
}
