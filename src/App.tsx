import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import AppNavbar from './components/Navbar';
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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <hr className="linebreak"></hr>
              <Experience />
              <hr className="linebreak"></hr>
              <Projects />
            </>
          }
        />
        <Route path="/walkthrough" element={<Walkthrough />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
