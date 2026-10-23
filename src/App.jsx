import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import './App.css';

const TITLES = {
  '/': 'Charlie | Programmer & Discord Community Manager',
  '/projects': 'Projects | Charlie',
};

function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Skills />
    </>
  );
}

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = TITLES[pathname] ?? TITLES['/'];
  }, [pathname]);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
