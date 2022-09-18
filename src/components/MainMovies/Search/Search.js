import Checkbox from '../Checkbox/Checkbox';
import './Search.css';

function Search() {
  return (
    <section className='search'>
      <div className='search__container'>
        <form action='#' className='search__form'>
          <input type='text' className='search__input' placeholder='Фильм' />
          <button type='submit' className='search__button'>Поиск</button>
        </form>
        <Checkbox></Checkbox>
      </div>
    </section>
  );
}

export default Search;