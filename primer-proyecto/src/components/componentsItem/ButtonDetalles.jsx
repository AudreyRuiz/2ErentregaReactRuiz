import React from 'react'

const ButtonDetalles = (props) => {
  return(
      <button 
          id="details" 
          style={{ width: "180%"}}
      >{props.txt}</button>
  )
}

export default ButtonDetalles