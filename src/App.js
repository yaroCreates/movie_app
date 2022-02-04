import react, { useEffect, useState } from 'react';
import './App.css';
import Mainbar from './components/Mainbar';
import Sidebar from './components/Sidebar';


const movie_api = 'https://api.themoviedb.org/3/movie/popular?api_key=3318862e9a9bdd5157c835306371af64'
const search_api = 'https://api.themoviedb.org/3/search/movie/?api_key=3318862e9a9bdd5157c835306371af64&query='
// const api_key = "3318862e9a9bdd5157c835306371af64"


function App() {

  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('game')
  const [searchValue, setSearchValue] = useState('')



  useEffect(() => {
    fetch(movie_api)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results)
      })
      .catch(err => console.log(err))
  }, [query])

  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (searchValue) {
      fetch(search_api + searchValue)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results)
      })
      .catch(err => console.log(err))

    setSearchValue('')
    }

    

  }

  const handleOnChange = (e) => {
    setSearchValue(e.target.value)
  }

  console.log(movies)
  return (
    <div className="container">
      <Sidebar getQuery={(q) => setQuery(q)} />
      <Mainbar items={movies} handleSubmit={handleOnSubmit} handleChange= {handleOnChange} searchValue={searchValue} />

    </div>
  );
}

export default App;
