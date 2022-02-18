import React, { useState, useEffect } from 'react';
import './Moviedetail.css'
import { useParams } from 'react-router-dom';


const originalImage = `https://image.tmdb.org/t/p/original/`
const w500Image = `https://image.tmdb.org/t/p/w500/`

function Moviedetail() {
    const { id } = useParams()
    const [movieDetails, setMovieDetails] = useState([])
    console.log(movieDetails)


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3318862e9a9bdd5157c835306371af64`)
            .then(response => response.json())
            .then(data => {
                setMovieDetails(data)
                console.log(movieDetails)
            })
            .catch(err => console.log(err))

    }, [])
    return (
        <div className='movie_detail_container'>
            {/* <img scr={originalImage + movieDetails.poster_path}/> */}
            <h1>{id}</h1>
        </div>
    );
}

export default Moviedetail;
