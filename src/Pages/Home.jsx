import React from 'react';
import Campaigns from "../Components/Campaigns/Campaigns";
import Hero from "../Components/Hero/Hero";


function Home() {
  return (
    <div className='bg-[#F3F3F3]'>
      <Hero />
      <Campaigns />
    </div>
  )
}

export default Home;