import Header from '../Header/Header';
import MainMoviesHeader from '../Header/HeaderMainMovies/HeaderMainMovies';
import Footer from '../Footer/Footer';

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
        <Footer />

      </main>
    </>
  );
}

export default MainMovies;