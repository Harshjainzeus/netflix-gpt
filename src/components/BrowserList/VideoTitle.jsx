import React from 'react'

const VideoTitle = ({movie}) => {
    const {title,overview} = movie;
  return (
    <div className = "w-screen aspect-video p-4 absolute text-white bg-gradient-to-r from-black flex items-center">
        <div className='ml-4 center'>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <p className='text-sm w-1/4'>{overview}</p>
            <div className='flex gap-2 mt-2'>
                <button className='bg-red-600 py-2 px-8 hover:opacity-80'>Play</button>
                <button className='bg-gray-600 p-2'>More Info</button>
            </div>
        </div>
    </div>
  )
}

export default VideoTitle