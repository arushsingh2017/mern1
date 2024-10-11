import React from 'react'
import style from './ItemNotFound.module.css'

export default function ItemNotFound() {
  return (
     <>
        <div className= {style.ItemNotFoundWrap}>
            <h3>Sorry!</h3>
            <p> This item is not avaiable</p>
        </div>
     </>
  )
}
