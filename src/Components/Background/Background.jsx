import React from 'react'
import pencil from "../../images/About_bg.jpeg";

function Background() {
  return (
    <div style={{backgroundImage: `url(${pencil})`}} className='bg-cover bg-no-repeat h-[730px]'></div>
  )
}

export default Background;