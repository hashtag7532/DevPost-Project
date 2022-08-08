import React from 'react';
import pencil from "../../images/About_bg.jpeg";
import navart from "../../images/navart.jpg";

function AboutSection() {
  return (
    <div>
    <div className='w-full h-[30px]'><img src={navart} /></div>
    {/* <div style={{backgroundImage: `url(${pencil})`}} className='bg-cover bg-no-repeat h-[730px]'></div> */}
    </div>
  )
}

export default AboutSection;