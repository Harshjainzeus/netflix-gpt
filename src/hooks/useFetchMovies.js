import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/store/movieSlice"
import { tmdb_movie_api, movie_options } from "../utils/constants/tmbd"

export const useFetchMovies = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
       fetchMovies()
    },[])
  
    const fetchMovies = async () => {
      const data = await fetch(tmdb_movie_api,movie_options);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results))
    }
    
}