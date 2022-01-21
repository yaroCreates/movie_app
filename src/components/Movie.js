import React from 'react';

function Movie({ id, title, type, rating, image, year, actor}) {

  return <div>
      <div className='movie_card'>
          <img className='movie_card_img' alt={title} src={image}/>
          <h2>{title}</h2>
          <h4>{type}</h4>
          <h4>{year}</h4>
          <h4>{rating}</h4>
          <p>{actor}</p>
      </div>
  </div>

  
}

export default Movie;
