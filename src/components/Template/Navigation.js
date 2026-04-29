import React from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import LanguageToggle from './LanguageToggle';
import useLanguage from '../../hooks/useLanguage';
import ptRoutes from '../../data/routes';
import enRoutes from '../../data/en/routes';

const Navigation = () => {
  const { lang } = useLanguage();
  const routes = lang === 'en' ? enRoutes : ptRoutes;

  return (
    <header id="header">
      <h1 className="index-link">
        {routes.filter((l) => l.index).map((l) => (
          <Link key={l.label} to={l.path}>{l.label}</Link>
        ))}
      </h1>
      <nav className="links">
        <ul>
          {routes.filter((l) => !l.index).map((l) => (
            <li key={l.label}>
              <Link to={l.path}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="lang-toggle-container">
        <LanguageToggle />
      </div>
      <Hamburger routes={routes} />
    </header>
  );
};

export default Navigation;
