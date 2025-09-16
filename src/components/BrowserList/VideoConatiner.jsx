import React from 'react'
import VideoTitle from './VideoTitle'
import Video from './Video'
import { useSelector } from 'react-redux'

const VideoConatiner = () => {
  const nowPlayingMovies = useSelector((state) => state.movie.nowPlayingMovies);
  if(!nowPlayingMovies) return;
  const movie = nowPlayingMovies?.[0];

  return (
    <div>
      <VideoTitle movie={movie}/>
      <Video movie={movie}/>
    </div>
  )
}

export default VideoConatiner