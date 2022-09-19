import './MoviesCard.css';

function MoviesCard({ name, duration, thumbnail, type }) {
  let hours = Math.floor(duration / 60);
  let minutes = Math.floor(duration - hours * 60);
  let buttonClassName = `movies-card__button movies-card__button_save movies-card__button_save_active ${
    type === 'save' ? 'movies-card__button_delete' : ''
  }`;

  return (
    <li className='movie-card__item'>
        
        <img src={thumbnail} alt={name} className='movie-card__image'/>
        
        
        <div className='movie-card__description'>
          <h3 className='movie-card__title'>{name}</h3>
          <button className={buttonClassName} type='button'></button>
          <div className='movie-card__time'>
          {hours}ч{minutes}
        </div>
        </div>
    </li>
  );
}

export default MoviesCard;