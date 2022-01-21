import react, { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie';


function App() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": "cf1db13756mshbe4505e0aab0a82p157db7jsnaa7941489db2"
      }
    })
      .then(response => response.json())
      .then(data => {
        let dMovie = data.d
        setMovies(dMovie)
      })
      .catch(err => console.error(err))
  }, [])

  console.log(movies)
  return (
    <div className="App">
      {movies.map((item) => 
          <Movie
            key={item.id}
            id={item.id}
            title={item.l}
            type={item.q}
            rating={item.rank}
            image={item.i.imageUrl}
            year={item.yr}
            actor={item.s}
          />
        )}
    </div>
  );
}

export default App;
