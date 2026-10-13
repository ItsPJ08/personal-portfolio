import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import AppNavbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './sections/Header';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Walkthrough from './pages/Walkthrough';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <>
      <AppNavbar />
      <ScrollToHash />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Experience />
                <Projects />
              </>
            }
          />
          <Route path="/walkthrough" element={<Walkthrough />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
