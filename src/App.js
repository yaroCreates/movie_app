import react, { useEffect, useState } from 'react';
import './App.css';
import Mainbar from './components/Mainbar';
import Sidebar from './components/Sidebar';


function App() {

  const [movies, setMovies] = useState([])
  const [ query, setQuery ] = useState('game')



  useEffect(() => {
    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${query}`, {
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
  }, [query])

  console.log(movies)
  return (
    <div className="container">
      <Sidebar />
      <Mainbar items = {movies} getQuery={(q) => setQuery(q)}/>

    </div>
  );
}

export default App;
