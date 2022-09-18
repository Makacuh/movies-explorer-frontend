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
    <main className='landing'>
      <Header
        color={'header__theme_white'}
        location={'header__box_landing'}
      >
        <LandingHeader />
      </Header>
      <Promo />
      <NavTab />
      <AboutProject />
      <Technologies />
      <AboutStudent />
      <Portfolio />
      <Footer />
    </main>
  );
}

export default Main;