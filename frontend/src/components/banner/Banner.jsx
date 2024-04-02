import React from 'react'

function Banner() {
  return (
    <section  id='home'className='w-full pt-10 pb-20 flex items-center border-b-[1px] font-titlefont border-b-black'>
    <div className='w-1/2'>
        <div className='flex flex-col gap 3'>
            <div>
                <h4 className='text-lg font-normal'>Welcome To My Creative World</h4>
                <h1 className='text-6xl font-bold  text-white'>
                    {""}
                    Hi! I'm{" "}
                    <span className="text-designColor capitalize">Linda Azuma</span>
                    </h1>
                    <h2 className='text-4xl font-bold text-white'>a <span>lorem,ispsum</span></h2>
            </div>
        </div>
    </div >
    </section>
  )
}

export default Banner
