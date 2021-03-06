import React from 'react';
import { Link } from 'react-router-dom'
import './Moviecard.css'


const originalImage = `https://image.tmdb.org/t/p/original`
const w500Image = `https://image.tmdb.org/t/p/w500/`

const Moviecard = ({ item }) => {

    return (

        <div className='movie_card' >
            <Link to={`/movie/${item.id}`}>
                <img className='movie_card_img' src={originalImage + item.poster_path} alt={item.title} />
            </Link>
            <h2 className='movie_card_name'>{item.title}</h2>
            <h2 className='movie_card_name'>{item.name}</h2>
            <h4 className='movie_card_rating'>{item.vote_average}</h4>
            <h5 className='movie_card_year'>{item.release_date}</h5>
        </div>



    );
};

export default Moviecard;
