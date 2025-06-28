import Footer from '../../components/global/footer';
import Navbarr from '../../components/global/navbar';
import Hero from './hero';
import Arttimes from './majalahArtimes';
import MenuEvent from './menuArtikel';
import MenuBakti from './menubakti';
import Profilmini from './profilMini';

function Home() {
  return (
    <div>
      <Navbarr />
      <main > 
        <Hero/>
        <Profilmini/>
        <MenuBakti/>
        <Arttimes/>
        <MenuEvent/>
      </main>
      <Footer />
    </div>
  );
}
export default Home;