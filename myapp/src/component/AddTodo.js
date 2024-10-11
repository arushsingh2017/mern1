import React, { useState } from 'react'
import FaAllergies from 'react-icons/fa'
import { FaBeer } from "react-icons/fa";
import { IoAddCircleSharp } from "react-icons/io5";



// function additemonclick(){
//   newitem('dd', 'ss')
// }

export default function AddTodo({ newitem }) {
  const [todoname, setTodoname] = useState('');
  const [tododate, settododate] = useState('');

  function handlername(e) {
    setTodoname(e.target.value)
   
  }
  
  function handlerduedate(e) {
    settododate(e.target.value)
   
  }
  function additemonclick(){
  newitem(todoname, tododate)
  setTodoname("")
  settododate("")
 // e.target.value=" ";
}
  return (
    <>
      <input type="text" placeholder='Enter Name' onChange={handlername} value={todoname} />
      <input type="text" placeholder='Enter Due Date' onChange={handlerduedate} value={tododate} />
      <button className='btn btn-primary' onClick={additemonclick}><IoAddCircleSharp style={{fontSize:'40px'}}/> </button>
    </>
  )
}
