import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const MovieContainer = () => {
    const nowPlayingMovies = useSelector((state) => state.movie.nowPlayingMovies);
    if(!nowPlayingMovies) return;
    console.log('moviecontainerrender')
  return (
    <div className='w-full bg-black pl-12'>
        <div className='w-full -mt-32 relative z-10 '>
            <MovieList movies={nowPlayingMovies} title="Now Playing"/>
            <MovieList movies={nowPlayingMovies} title="Trending"/>
            <MovieList movies={nowPlayingMovies} title="Top Rated"/>
            <MovieList movies={nowPlayingMovies} title="Upcoming"/>
        </div>
    </div>
  )
}

export default MovieContainer