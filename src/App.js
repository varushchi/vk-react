import React from 'react';
import MovieCard from './MovieCard';
import './App.css'

function App() {
  const [movieData, setMovieData] = React.useState(null);
  React.useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1`;
    fetch(url)
      .then(response => response.json())
      .then(data => setMovieData(data.results))
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, []);

  const movieElem = movieData && movieData.map(elem => {
    return(
      <MovieCard 
        key = {elem.id}
        id = {elem.id}
        img = {`https://image.tmdb.org/t/p/w500${elem.poster_path}`}
        title = {elem.title}
        rating = {elem.vote_average.toFixed(1)}
        date = {elem.release_date.split("-").join('.')}
        overview = {elem.overview}
      />
    )
  })

  return (
    <main>
      {movieData && movieElem}
    </main>
  );
}

export default App;
