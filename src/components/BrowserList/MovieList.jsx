
import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies,title}) => {
  return (
    <div className=' w-full pb-2  text-white ' >
        <h2 className='text-2xl font-bold mb-2'>{title}</h2>
            <div className='flex space-x-4 overflow-x-scroll pb-4'>
              {movies?.map((movie)=> <MovieCard key={movie.id} movie={movie}/>)}
            </div>
    </div>
  )
}

export default MovieList