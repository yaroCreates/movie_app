import react from 'react';
import './App.css';
import Movie from './components/Movie';


function App() {

  const movies = ['1', '2', '3', '4']
  return (
    <div className="App">
      <h1>Hello World</h1>
      {movies.map (movie => {
        <Movie />

      })}
    </div>
  );
}

export default App;
