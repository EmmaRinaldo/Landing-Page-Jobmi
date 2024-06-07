import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavbarMobile';
import Hero from './components/Hero';
import Header from './components/Header';
import CardComponent from './components/CardComponent';
import ActionButton from './components/ActionButton';
import BottomCard from './components/BottomCard';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App overflow-hidden">
      <Navbar />
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
