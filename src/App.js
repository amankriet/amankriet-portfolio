// import logo from './logo.svg';
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="box-border text-gray-900 body-font snap-y snap-mandatory w-screen h-screen overflow-scroll">
      <header>
        <Header />
      </header>
      <main>
        <Home />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
