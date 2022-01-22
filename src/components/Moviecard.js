import React from 'react';
import './Moviecard.css'

const Moviecard = ( { item }) => {

    return (
        <div className='movie_card' >
            <img className='movie_card_img' src={item.i.imageUrl} alt={item.l}/>
            <h2 className='movie_card_name'>{item.l}</h2>
            <h4>{item.q}</h4>
            <h5>{item.yr}</h5>
            <p>{item.s}</p>
            

        </div>
    );
};

export default Moviecard;



// key={item.id}
//             id={item.id}
//             title={item.l}
//             type={item.q}
//             rating={item.rank}
//             image={item.i.imageUrl}
//             year={item.yr}
//             actor={item.s}