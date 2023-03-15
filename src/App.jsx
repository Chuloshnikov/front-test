import './App.css';
import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

const App = () => {

  return (
    <>
      <Header/>
      <main>
        <Hero/>
      </main>
      <GlobalStyle/>
    </>
  )
}

export default App
