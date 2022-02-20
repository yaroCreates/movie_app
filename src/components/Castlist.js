import React, { useState, useEffect } from 'react';
import './Castlist.css'
import { useParams } from 'react-router-dom';

const originalImage = `https://image.tmdb.org/t/p/original`
const w500Image = `https://image.tmdb.org/t/p/w500/`

function Castlist() {
    const { id } = useParams()
    const [ castList, setCastList] = useState([])
    // console.log(castList)


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=3318862e9a9bdd5157c835306371af64`)
            .then(response => response.json())
            .then(data => {
                setCastList(data)
            })
            .catch(err => console.log(err))

    }, [])

  return (
      <div>

      </div>   
  );
}

export default Castlist;
