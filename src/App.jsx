import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import './App.css';

function Home() {
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

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}
