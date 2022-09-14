import Header from '../Header/Header';
import LandingHeader from '../Header/LandingHeader/LandingHeader';
import Promo from '../Main/Promo/Promo';

function Main() {
  return (
    <main className='landing'>
      <Header
        color={'header__theme_white'}
        location={'header__box_landing'}
      >
        <LandingHeader />
      </Header>
      <Promo />
    </main>
  );
}

export default Main;