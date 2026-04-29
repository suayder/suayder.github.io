import React, { Suspense, lazy, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LanguageToggle from './LanguageToggle';

const Menu = lazy(() => import('react-burger-menu/lib/menus/slide'));

const Hamburger = ({ routes }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hamburger-container">
      <nav className="main" id="hambuger-nav">
        <ul>
          {open ? (
            <li className="menu close-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">&#10005;</div>
            </li>
          ) : (
            <li className="menu open-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">&#9776;</div>
            </li>
          )}
        </ul>
      </nav>
      <Suspense fallback={<></>}>
        <Menu right isOpen={open}>
          <ul className="hamburger-ul">
            {routes.map((l) => (
              <li key={l.label}>
                <Link to={l.path} onClick={() => setOpen(!open)}>
                  <h3 className={l.index && 'index-li'}>{l.label}</h3>
                </Link>
              </li>
            ))}
            <li className="hamburger-lang-toggle">
              <LanguageToggle />
            </li>
          </ul>
        </Menu>
      </Suspense>
    </div>
  );
};

Hamburger.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    index: PropTypes.bool,
  })).isRequired,
};

export default Hamburger;
