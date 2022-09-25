import Header from '../Header/Header';
import HeaderMainMovies from '../Header/HeaderMainMovies/HeaderMainMovies';
import MoviesList from '../MainMovies/MoviesList/MoviesList';
import Footer from '../Footer/Footer';
import Search from '../MainMovies/Search/Search';

function SavedMovies() {
  return (
    <>
      <Header
        color={'header__theme_white'}
        location={'header__container_movies'}
      >
        <HeaderMainMovies />
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