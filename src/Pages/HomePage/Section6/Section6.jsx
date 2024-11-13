import React from 'react'
import Box from './Box/Box'
import "./section6.css"

const Section6 = () => {
  return (
    <section className='sct6 w-full h-[840px] flex justify-center items-center'>
    
      <div className="sct6-container w-[80%] h-[635px]  flex flex-col justify-between items-center">
        <h2 className='w-full h-[55px] text-[45px] font-[Montserrat] font-bold  text-center'>OUR TEAM</h2>

        <div className="sct6-content w-full h-[520px]  flex flex-wrap justify-between items-center">
          <Box/>
          <Box/>
          <Box/>
        </div>
        
      </div>
      
    </section>
  )
}

export default Section6
