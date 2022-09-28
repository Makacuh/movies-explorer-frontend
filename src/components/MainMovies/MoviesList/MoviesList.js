import './MoviesList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import data from '../../../utils/data';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function MoviesList({ 
  movies,
  isNotFound,
  isFailed,
  savedMovies,
  onSave,
  onDelete,
  checked,
  checkedSaveMovies,
  allSavedMovies, }) {
    const [moviesToLoad, setMoviesToLoad] = useState(0);
    const [displayedMovies, setDisplayedMovies] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const location = useLocation();

    const searchShortMovies = (movies) => {
      const searchShortMoviesArr = movies.slice(0);
      return searchShortMoviesArr.filter((item) => item.duration <= 40);
    };

    let saveMoviesFilterArr = !checkedSaveMovies
    ? searchShortMovies(savedMovies)
    : savedMovies;

    const handleShowMoreMovies = () => {
      setDisplayedMovies((movies) => movies + moviesToLoad);
    };

  return (
    <section className='movies-list'>
      <ul className='movies-list__container'>
        {movies.map((movie) => {
          return (
            <MoviesCard
              key={movie.id}
              name={movie.nameRU}
              duration={movie.duration}
              thumbnail={`https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`}
              type={type}
            />
          );
        })}
      </ul>
      <button type='button' className={hiddenButton}>
        Еще
      </button>
    </section>
  );
}

export default MoviesList;