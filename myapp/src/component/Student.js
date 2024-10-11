import React from 'react'
import StudentList from './StudentList'

export default function Student() {
    const aa=[
        {
            name:'one1',
            ages:'30',
            add:'delihi'
        },
        {
            name:'Two',
            ages:'130',
            add:'Pune'
        }
    ]

    // const aa=['one', '3', '5', '10']
    // const bb=['22', '33', '55', '110']
    // const cc=['111','222', '333', '444']
  return (
    <>
       <div className='container'>
        <h3 className='text-center text-bolder'>Student List </h3>
        {/* {
            aa.map((item)=>{
                <StudentList name="{item.name}"/> 
            })
        } */}
        <StudentList name={aa}/>
        {/* <StudentList name="deepak"/>  */}
           {/* <StudentList name={aa + ' '}/>
           <StudentList name={bb +' '}/>
           <StudentList name={cc + ''}/> */}
        </div>
    </>
  )
}
