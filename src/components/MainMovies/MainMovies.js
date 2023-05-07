import Header from '../Header/Header';
import HeaderMainMovies from '../Header/HeaderMainMovies/HeaderMainMovies';
import Footer from '../Footer/Footer';
import Search from './Search/Search';
import MoviesList from './MoviesList/MoviesList';

function MainMovies() {
  return (
    <>
      <Header
        color={'header__theme_white'}
        location={'header__container_movies'}
      >
        <HeaderMainMovies />
      </Header>
      <main className='movies'>
      <Search />
      <MoviesList />
        <Footer />

      </main>
    </>
  );
}

export default MainMovies;