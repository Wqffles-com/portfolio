import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <Hero />
      <hr className="divider" />
      <Experience />
      <hr className="divider" />
      <Skills />
      <hr className="divider" />
      <Footer />
    </>
  );
}

