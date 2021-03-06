import react, { useEffect, useState } from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import './App.css';
import Mainbar from './components/Mainbar';
import Sidebar from './components/Sidebar';
import Moviedetail from './components/Moviedetail';
import Header from './components/Header'


const movie_api = 'https://api.themoviedb.org/3/movie/popular?api_key=3318862e9a9bdd5157c835306371af64'
const search_api = 'https://api.themoviedb.org/3/search/movie/?api_key=3318862e9a9bdd5157c835306371af64&query='
const trending_api = 'https://api.themoviedb.org/3/trending/all/day?api_key=3318862e9a9bdd5157c835306371af64'
const top_rated = 'https://api.themoviedb.org/3/movie/top_rated?api_key=3318862e9a9bdd5157c835306371af64'
const tv_api = 'https://api.themoviedb.org/3/tv/popular?api_key=3318862e9a9bdd5157c835306371af64'

const movieUrl = 'https://api.themoviedb.org/3/movie/'
const key = "api_key=3318862e9a9bdd5157c835306371af64"


function App() {

  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')



  useEffect(() => {
    fetch(movie_api)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results)
      })
      .catch(err => console.log(err))
  }, [])


  const reset = () => {
    let xyz = document.querySelector('.sidebar')
    console.log(xyz)
    xyz.style.display = ''
  }

  const hideMenu = () => {
    let xyz = document.querySelector('.sidebar')
    console.log(xyz)
    xyz.style.display = 'none'
    reset()
  }


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

  const handleTrending = (e) => {
    e.preventDefault()
    fetch(trending_api)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results)
      })
      .catch(err => console.log(err))

    setSearchValue('')
    hideMenu()



  }

  const handlePopular = (e) => {
    e.preventDefault()
    fetch(movie_api)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results)
      })
      .catch(err => console.log(err))

    setSearchValue('')
    hideMenu()

  }

  const handleTopRated = (e) => {
    e.preventDefault()
    fetch(top_rated)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results)
      })
      .catch(err => console.log(err))

    setSearchValue('')
    hideMenu()

  }

  const handleTvShow = (e) => {
    e.preventDefault()
    fetch(tv_api)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results)
      })
      .catch(err => console.log(err))

    setSearchValue('')
    hideMenu()

  }

  const handleOnChange = (e) => {
    setSearchValue(e.target.value)
    console.log(searchValue)
  }

  // const handleMovieDetails = (id) => {
  //   fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3318862e9a9bdd5157c835306371af64`)
  //     .then(response => response.json())
  //     .then(data => (data.results))
  //     .catch(err => console.log(err))

  // }



  console.log(movies)
  return (
    <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <div className='container'>
              <Header popular={handlePopular} searchValue={searchValue} handleSubmit={handleOnSubmit} handleChange={handleOnChange} />
              <Sidebar trending={handleTrending} popular={handlePopular} top_rated={handleTopRated} tv_show={handleTvShow} />
              <Mainbar items={movies} handleSubmit={handleOnSubmit} handleChange={handleOnChange} searchValue={searchValue} />
            </div>
          </Route>
          <Route path="/movie/:id" >
            <Moviedetail />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
