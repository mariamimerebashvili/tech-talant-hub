import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/experts', label: 'Experts' },
  { to: '/request-demo', label: 'Request Demo' },
  { to: '/contact', label: 'Contact Us' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header header--enter">
      <div className="header__inner container">
        <NavLink to="/" className="header__logo" onClick={closeMenu}>
          Tech Talent Hub
        </NavLink>

        <button
          type="button"
          className={`header__toggle${menuOpen ? ' header__toggle--open' : ''}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="header__toggle-bar" />
          <span className="header__toggle-bar" />
          <span className="header__toggle-bar" />
        </button>

        <nav className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}>
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `header__link${isActive ? ' header__link--active' : ''}`
              }
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="header__overlay"
          onClick={closeMenu}
          aria-label="Close menu"
        />
      )}
    </header>
  );
}

export default Header;
