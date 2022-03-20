// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <main className='text-gray-900 bg-gray-100 body-font snap-y snap-mandatory w-screen h-screen overflow-scroll'>
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Header />
    </main>
  );
}

export default App;
