import React,{useState} from 'react'
import CalButton from './CalButton'

export default function CalButtonContainer() {
  // const [calval, setCalval]= useState("qw1")
  const BTNclick=(buttonText)=>{
    if(buttonText=== 'C'){

    }
    else if(buttonText=== '='){

    }
    else{
      // const newcalval = calval + buttonText
      //  setCalval(calval)
    }
  }

  return (
    <>
        <div className={CalButton.calButtonwrap}>
        <CalButton onbuttonclick= {BTNclick}/>
        </div>

    </>
  )
}
