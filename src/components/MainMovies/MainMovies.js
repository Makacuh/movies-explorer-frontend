import Header from '../Header/Header';
import HeaderMainMovies from '../Header/HeaderMainMovies/HeaderMainMovies';
import Footer from '../Footer/Footer';
import Search from './Search/Search';
import MoviesList from './MoviesList/MoviesList';

function MainMovies({
  onSubmit,
  movies,
  isLoading,
  isFailed,
  isNotFound,
  searchKeyword,
  savedMovies,
  onSave,
  onDelete,
  onCheckbox,
  checked,
  localCheckbox
}) {
  return (
    <>
      <Header
        color={'header__theme_white'}
        location={'header__container_movies'}
      >
        <HeaderMainMovies />
      </Header>
      <main className='movies'>
        <Search
          onSubmit={onSubmit}
          searchKeyword={searchKeyword}
          onCheckbox={onCheckbox}
          checked={checked}
          localCheckbox={localCheckbox}
        />
        <MoviesList
          movies={movies}
          isNotFound={isNotFound}
          isFailed={isFailed}
          searchKeyword={searchKeyword}
          savedMovies={savedMovies}
          onSave={onSave}
          onDelete={onDelete}
          onCheckbox={onCheckbox}
          checked={checked}
        />
        <Footer />

      </main>
    </>
  );
}

export default MainMovies;