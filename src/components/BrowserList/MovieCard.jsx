import React from 'react'
import { tmdb_image_api } from '../../utils/constants/tmbd'

const MovieCard = ({movie}) => {
  const {title, poster_path, vote_average} = movie;
  return (
    <div className='flex-none w-60 bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200'>
      <img 
        src={tmdb_image_api + poster_path} 
        alt={title} 
        className='w-full aspect-video object-cover' 
      />
      <div className='p-3'>
        <h2 className='text-lg font-semibold text-white line-clamp-1'>{title}</h2>
        <div className='flex text-center mt-1'>
          <span className='text-yellow-400'>★</span>
          <span className='text-white ml-1'>{vote_average.toFixed(1)}/10</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard