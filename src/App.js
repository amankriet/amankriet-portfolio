// import logo from './logo.svg';
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
    return (
        <div className="box-border body-font w-screen h-screen text-primary bg-secondary">
            <Header/>
            <div className={'*:py-8 *:pt-[4.2rem] md:*:pt-[4.8rem] *:px-8 *:bg-inherit *:bg-secondary h-screen box-border'}>
                <Home/>
                <Skills/>
                <Projects/>
                <Contact/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
