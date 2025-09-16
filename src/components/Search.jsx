import React from 'react'
import { useLocation } from 'react-router-dom'
import MovieList from './BrowserList/MovieList'

const Search = () => {
  const movies = useLocation().state?.movies;
  return (
    <div className='w-full bg-black'>
      <div className='w-full p-20 h-screen'>
        <MovieList movies={movies} title="Search Results"/>
      </div>
    </div>
  )
}

export default Search