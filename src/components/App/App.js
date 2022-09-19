import Main from '../Main/Main';
import MainMovies from '../MainMovies/MainMovies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='page'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<MainMovies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />

      </Routes>
    </div>
  );
}

export default App;