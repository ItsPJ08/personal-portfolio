import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import { CloseIcon, MenuIcon } from './Icons';

const links = [
  { to: '/', label: 'Home' },
  { to: '/#projects', label: 'Projects' },
  { to: '/walkthrough', label: 'Walkthrough' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
];

export default function AppNavbar() {
  const { pathname, hash } = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (to: string) => {
    const [path, linkHash = ''] = to.split('#');
    return pathname === path && hash === (linkHash ? `#${linkHash}` : '');
  };

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__logo">PP</span>
          Prabjot Pannu
        </Link>

        <button
          className="nav__toggle"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>

        <nav id="nav-menu" className={`nav__menu ${open ? 'nav__menu--open' : ''}`}>
          <ul className="nav__links">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`nav__link ${isActive(link.to) ? 'nav__link--active' : ''}`}
                  aria-current={isActive(link.to) ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <SocialLinks className="nav__social" />
        </nav>
      </div>
    </header>
  );
}
