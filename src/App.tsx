import Landing from './components/Landing';
import Quote from './components/Quote';
import Meditace from './components/Meditace';
import SeznamAkci from './components/SeznamAkci';
import Omne from './components/Omne';
import Kontakt from './components/Kontakt';
import './styles/styles.css';

function App() {

  return (
    <>
      <div className='page-container'>
        <Landing />
        <Quote />
        <Meditace />
        <SeznamAkci />
        <Omne />
        <Quote />
        <Kontakt />
      </div>
    </>
  );
}

export default App;
