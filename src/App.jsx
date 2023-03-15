import './App.css';
import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import GetPanel from './components/GetPanel/GetPanel';
import PostPanel from './components/PostPanel/PostPanel';

const App = () => {

  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <GetPanel/>
        <PostPanel/>
      </main>
      <GlobalStyle/>
    </>
  )
}

export default App
