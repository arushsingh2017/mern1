import React from 'react'
import style from './DisplayData.module.css'

export default function DisplayData({displayVal}) {
  return (
    <>
        
          <input className={style.inputField} type='text' value={displayVal}/>
    </>
  )
}
