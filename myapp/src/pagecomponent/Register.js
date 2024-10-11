import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [uname, setUsername]= useState('')
  const [uage, setUserage]= useState('')
  const [ucity, setUsercity]= useState('')

  const Namehander =(event)=>{
    setUsername(event.target.value)
  }

  const Agehandler =(event)=>{
    setUserage (event.target.value)
  }

  const cityhandler = (event)=>{
    setUsercity(event.target.value)
  }



  const userRegister = async()=> {  
    let alldata= {name:uname, age:uage, city:ucity}  
      
    let result=  await fetch('http://localhost:4400/reguser', {
         method: 'post',
         body: JSON.stringify(alldata),
         headers: {                
             'Content-Type': 'application/json'
         },            
     });
     result= await result.json();
    //  console.log(result);
     if(result){
        alert("one Record is saved")
     } else{
      alert("try more time")
     }

     setUsername('');
     setUserage('');
     setUsercity('');
   
    //  localStorage.setItem("User", JSON.stringify(result))
 }

  return (
    <div className='container pt-5 pb-5' style={{maxWidth:"700px", margin:'0 auto'}}>
      <h2 className='text-bolder'>User Register Pages</h2>
      <div className='row'>
        <div className='col-sm-12'>
          <input value={uname} type='text' placeholder='Enter User Name' className='form-control mt-4' onChange={Namehander} />
        </div>
      </div>

      <div className='row'>
        <div className='col-sm-12'>
          <input value={uage} type='number' placeholder='Enter age' className='form-control mt-4' onChange={Agehandler} />
        </div>
      </div>

      <div className='row'>
        <div className='col-sm-12'>
          <input value={ucity} type='text' placeholder='Enter city' className='form-control mt-4' onChange={cityhandler} />
        </div>
      </div>
      
      <button className='btn btn-primary mt-4' onClick={userRegister}>Save me</button>

    </div>
  )
}

export default Register
