import Header from '../Header/Header';
import HeaderMainMovies from '../Header/HeaderMainMovies/HeaderMainMovies';
import MoviesList from '../MainMovies/MoviesList/MoviesList';
import Footer from '../Footer/Footer';
import Search from '../MainMovies/Search/Search';
import Preloader from '../MainMovies/Preloader/Preloader';

function SavedMovies({
  movies,
  onSubmit,
  isLoading,
  isFailed,
  isNotFound,
  searchKeyword,
  onCheckbox,
  checked,
  checkedSaveMovies,
  savedMovies,
  onSave,
  onDelete,
  allSavedMovies,
}) {
  return (
    <>
      <Header
        color={'header__theme_white'}
        location={'header__container_movies'}
      >
        <HeaderMainMovies />
      </Header>
      <main className='save-movies'>
        <Search
          onSubmit={onSubmit}
          searchKeyword={searchKeyword}
          onCheckbox={onCheckbox}
          checked={checked}
          checkedSaveMovies={checkedSaveMovies}
        ></Search>
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesList
            checked={checked}
            checkedSaveMovies={checkedSaveMovies}
            movies={movies}
            isNotFound={isNotFound}
            isFailed={isFailed}
            savedMovies={savedMovies}
            onSave={onSave}
            onDelete={onDelete}
            allSavedMovies={allSavedMovies}
          ></MoviesList>
        )}
      </main>
      <Footer></Footer>
    </>
  );
}

export default SavedMovies;