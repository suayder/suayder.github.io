import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';
import useLanguage from '../../hooks/useLanguage';
import ptUi from '../../data/ui';
import enUi from '../../data/en/ui';

const { PUBLIC_URL } = process.env;

const SideBar = () => {
  const { lang } = useLanguage();
  const t = lang === 'en' ? enUi : ptUi;

  return (
    <section id="sidebar">
      <section id="intro">
        <Link to="/" className="logo">
          <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
        </Link>
        <header>
          <h2>Suayder Costa</h2>
          <p><a href="mailto:suayder1@gmail.com">suayder1@gmail.com</a></p>
        </header>
      </section>

      <section className="blurb">
        <h2>{t.sidebar.heading}</h2>
        <p>{t.sidebar.blurb}</p>
        <ul className="actions">
          <li>
            {!window.location.pathname.includes('/resume')
              ? <Link to="/resume" className="button">{t.sidebar.seeMore}</Link>
              : <Link to="/about" className="button">{t.sidebar.aboutMe}</Link>}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">&copy; Suayder Costa <Link to="/">suayder.github.io</Link>.</p>
      </section>
    </section>
  );
};

export default SideBar;
