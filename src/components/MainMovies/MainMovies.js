import Header from '../Header/Header';
import MainMoviesHeader from '../Header/HeaderMainMovies/HeaderMainMovies';
import Footer from '../Footer/Footer';
import SearchForm from './Search/Search';
import MoviesList from './MoviesList/MoviesList';

function MainMovies() {
  return (
    <>
      <Header
        color={'header__theme_black'}
        location={'header__container_movies'}
      >
        <MainMoviesHeader />
      </Header>
      <main className='movies'>
      <SearchForm />
      <MoviesList />
        <Footer />

      </main>
    </>
  );
}

export default MainMovies;