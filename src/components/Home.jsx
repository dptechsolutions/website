import React from 'react'
import video from '../assets/bg-video.mp4'
function Home() {
  return (

    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
     <video
        autoPlay
        loop
        muted
        playsInline
        className='absolute top-0 left-0 min-w-full min-h-full opacity-25'>
      
        <source src={video} type="video/mp4" />
      </video> 
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row content">
        <div className="flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold text-white p-2 md:p-4 rounded-md">
          DP Tech Solutions
        </h1>
        </div>

        
      </div>
    </div>
  )
}

export default Home