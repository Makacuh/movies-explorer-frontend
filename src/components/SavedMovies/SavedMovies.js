import Header from '../Header/Header';
import HeaderSavedMovies from '../Header/HeaderSavedMovies/HeaderSavedMovies';
import MoviesList from '../MainMovies/MoviesList/MoviesList';
import Footer from '../Footer/Footer';
import Search from '../MainMovies/Search/Search';

function SavedMovies() {
  return (
    <>
      <Header
        color={'header__theme_black'}
        location={'header__container_movies'}
      >
        <HeaderSavedMovies />
      </Header>
      <main className='save-movies'>
        <Search></Search>
        <MoviesList type='save' size={3}></MoviesList>
      </main>
      <Footer></Footer>
    </>
  );
}

export default SavedMovies;