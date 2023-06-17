// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="box-border text-gray-900 bg-gray-100 body-font snap-y snap-mandatory w-screen h-screen overflow-scroll">
      <Header />
      <Home />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
