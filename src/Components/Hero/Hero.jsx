import React from 'react';
import imageMain from "../../images/Future_is_Blockchain.jpeg";

function Hero() {
  return (
    <div className='flex mt-[30px] my-[60px] items-center drop-shadow-md'>
      <div className='text-[50px] pl-[40px] pr-[100px]'>
        <div>START</div><div> YOUR</div><div> DREAMS</div><div> HERE</div>
      </div>
      <div className=''>
        <img src={imageMain} alt="Future is Blockchain" className='w-[1105px] h-[270px] center' />
      </div>
    </div>
  )
}

export default Hero;