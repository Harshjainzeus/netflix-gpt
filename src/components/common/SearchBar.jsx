import React, { useRef } from 'react'
import openai from '../../utils/openai';
import { movie_options } from '../../utils/constants/tmbd';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const searchRef = useRef(null);
  const navigate  = useNavigate();

  const fetchMovie = async(movieName) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}`,movie_options);
    const data = await response.json();
    return data.results[0]; // so promise is returned
  }
  const handleSearch = async (e) => {
    e.preventDefault();
    const searchValue = searchRef.current.value;
    const response = await openai.responses.create({
    // const response = await openai.chat.completions.create({
      "model": "gpt-4o-mini",
      instructions: 'You are a movie recommendation system',
      input: [
        { role: 'developer',
      content: `search for movies with genre ${searchValue} and return 5 movie names in string seperated by commas like movie1,movie2,movie3 `}]
    });
    const moviesList = response.output_text.split(",").slice(1);
    const moviePromises = moviesList.map((movie)=>{
      return fetchMovie(movie);// returns a promise
    })
    const movies = await Promise.all(moviePromises);
    navigate("/browse/search",{state:{movies}});
  }
  return (
    <div className=' flex items-center justify-center w-1/2 py-2 px-4'>
      <form onSubmit={handleSearch}>
      <input ref={searchRef} className='w-3/4 bg-white p-2 rounded-l-lg' type="text" placeholder="Search"/>
      <button onClick = {handleSearch} className='bg-red-600 p-2 text-white rounded-r-lg w-1/4'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar