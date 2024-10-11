import React from 'react'
import style from './CalButton.module.css'

export default function CalButton({onbuttonclick}) {
    const btnlist =['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
  return (
    <div className={style.calButtonwrap}>
        {
            btnlist.map(btnitem=><button key={btnitem} onClick={()=>onbuttonclick(btnitem)} className={style.btn}>{btnitem}</button>)
           
        }


     
     
    </div>
  )
}
