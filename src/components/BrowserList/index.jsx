import React from 'react'
import { useFetchMovies } from '../../hooks/useFetchMovies'
import VideoContainer from './VideoConatiner'
import MovieContainer from './MovieContainer'

const BrowserList = () => {
  useFetchMovies()
  return (
    <div>
        <VideoContainer/>
        <MovieContainer/>
    </div>
  )
}

export default BrowserList;