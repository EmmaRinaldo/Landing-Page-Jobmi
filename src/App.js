import logo from './logo.svg';
import './App.css';
import NavbarMobile from './components/NavbarMobile';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Header from './components/Header';
import CardComponent from './components/CardComponent';
import ActionButton from './components/ActionButton';
import InfoText from './components/InfoText';
import BottomCard from './components/BottomCard';
import Newsletter from './components/Newsletter';
import Brands from './components/Brands';
import TestComponent from './components/TestComponent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App overflow-hidden font-Arimo">
      <NavbarMobile />
      <Hero />
      <Header />
      <CardComponent />
      <ActionButton />
      <InfoText />
      <BottomCard />
      <Newsletter />
      <Brands />
      <TestComponent />
      <Footer />
    </div>
  );
}

export default App;
