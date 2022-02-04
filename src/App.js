import react, { useEffect, useState } from 'react';
import './App.css';
import Mainbar from './components/Mainbar';
import Sidebar from './components/Sidebar';


const movie_api = 'https://api.themoviedb.org/3/movie/popular?api_key=3318862e9a9bdd5157c835306371af64'
// const api_key = "3318862e9a9bdd5157c835306371af64"
const w500Image = `https://image.tmdb.org/t/p/w500/`
const search_api = ''


function App() {

  const [movies, setMovies] = useState([])
  const [ query, setQuery ] = useState('game')



  useEffect(() => {
    fetch(movie_api)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results)
      })
      .catch(err => console.log(err))
  }, [query])

  console.log(movies)
  return (
    <div className="container">
      <Sidebar getQuery={(q) => setQuery(q)}/>
      <Mainbar items = {movies} getQuery={(q) => setQuery(q)}/>

    </div>
  );
}

export default App;
