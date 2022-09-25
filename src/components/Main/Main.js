import Header from '../Header/Header';
import LandingHeader from '../Header/LandingHeader/LandingHeader';
import Promo from '../Main/Promo/Promo';
import NavTab from '../Main/NavTab/NavTab';
import AboutProject from '../Main/AboutProject/AboutProject';
import Technologies from '../Main/Technologies/Technologies';
import Portfolio from '../Main/Portfolio/Portfolio';
import AboutStudent from '../Main/AboutStudent/AboutStudent';
import Footer from '../Footer/Footer';

function Main() {
  return (
      <><Header
      color={'header__theme_gray'}
      location={'header__box_landing'}
    >
      <LandingHeader />
    </Header><main className='landing'>
        <Promo />
        <NavTab />
        <AboutProject />
        <Technologies />
        <AboutStudent />
        <Portfolio />
      </main><Footer /></>
  );
}

export default Main;