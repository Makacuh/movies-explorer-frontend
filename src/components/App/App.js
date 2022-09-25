import Main from '../Main/Main';
import MainMovies from '../MainMovies/MainMovies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../ProfileUser/Login/Login';
import Profile from '../ProfileUser/Profile/Profile';
import Register from '../ProfileUser/Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';

import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='page'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<MainMovies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signup' element={<Register />} />
        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </div>
  );
}

export default App;