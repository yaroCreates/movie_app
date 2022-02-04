import React from 'react';
import './Moviecard.css'


const originalImage = `https://image.tmdb.org/t/p/original/`
const w500Image = `https://image.tmdb.org/t/p/w500/`

const Moviecard = ( { item }) => {

    return (
        <div className='movie_card' >
            <img className='movie_card_img' src={originalImage + item.poster_path} alt={item.title}/>
            {/* <h2 className='movie_card_name'>{item.l}</h2>
            <h4 className='movie_card_type'>{item.q}</h4>
            <h5 className='movie_card_year'>{item.yr}</h5>
            <p className='movie_card_actors'>{item.s}</p> */}
            

        </div>
    );
};

export default Moviecard;
