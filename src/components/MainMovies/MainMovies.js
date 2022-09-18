import Header from '../Header/Header';
import MainMoviesHeader from '../Header/HeaderMainMovies/HeaderMainMovies';
import Footer from '../Footer/Footer';
import SearchForm from './Search/Search';

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
        <Footer />

      </main>
    </>
  );
}

export default MainMovies;