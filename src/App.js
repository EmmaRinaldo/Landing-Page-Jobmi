import logo from './logo.svg';
import './App.css';
import NavbarMobile from './components/NavbarMobile';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Header from './components/Header';
import CardComponent from './components/CardComponent';
import ActionButton from './components/ActionButton';
import BottomCard from './components/BottomCard';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App overflow-hidden">
      <NavbarMobile />
      <Menu />
      <Hero />
      <Header />
      <CardComponent />
      <ActionButton />
      <BottomCard />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
