import React, { useEffect, useState } from 'react'

import './Row.css'
// import request from './Requests';
import axios from './axios';

const Row = ({title, fetchUrl, isLargeRow = false}) => {
    const [Movies, setMovies] = useState([]);

    const base_url = 'https://image.tmdb.org/t/p/original/';
    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData()
    }, [fetchUrl])


   return (
    <div className='row'>
      <h2>{title}</h2>
        <div className="row_posters">
            {Movies.map(movie => 
                ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (     // if their is any broken link of the movies use this condition to not show on the result 
                <img className={`row_poster ${isLargeRow && 'row_posterLarge'}`} key={movie.id} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
            ))}
        </div>
    </div>
  )
}

export default Row