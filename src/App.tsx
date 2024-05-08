import Landing from './components/Landing';
import About from './components/About';
import './styles/styles.css';
import './styles/landing.css';
import './styles/about.css';

import useScroll from './hooks/useScroll';

function App() {

  return (
    <>
      <Landing />
      <About />
    </>
  )
}

export default App;
