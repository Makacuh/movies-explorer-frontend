import Main from '../Main/Main';
import MainMovies from '../MainMovies/MainMovies';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='page'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<MainMovies />} />

      </Routes>
    </div>
  );
}

export default App;