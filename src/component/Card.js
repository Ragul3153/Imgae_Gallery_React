import React from 'react'
import "../App.css" 

export const Card = ({imgsrc, name}) => {
    console.log(imgsrc);
    
  return (
    <div class="sec-1">
        <img class="pic1" src={imgsrc}></img>
        <h2 class="text">{name}</h2>
    </div>
  )
}

