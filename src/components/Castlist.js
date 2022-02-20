import React, { useState, useEffect } from 'react';
import './Castlist.css';

const originalImage = `https://image.tmdb.org/t/p/original`
const w500Image = `https://image.tmdb.org/t/p/w500`

function Castlist({ id }) {
    const [casts, setCasts] = useState([])
    console.log(id)
    console.log(casts)


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=3318862e9a9bdd5157c835306371af64`)
            .then(response => response.json())
            .then(data => {
                setCasts(data.cast.slice(0, 5))
            })
            .catch(err => console.log(err))

    }, [id])

    return (
        <div className='castlist'>
            {
                casts.map((cast, i) => (
                    <div key={i} className='castlist_item'>
                        <div className='castlist_img' style={{
                            backgroundImage:
                                `url(${w500Image}${cast.profile_path})`
                        }}></div>
                        <p className='castlist_name'>{cast.name || cast.original_name}</p>
                    </div>
                ))
            }

        </div>
    );
}

export default Castlist;
