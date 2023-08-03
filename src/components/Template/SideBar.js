import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
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
      <h2>Sobre</h2>
      <p>Olá, eu sou o Suayder. Sou graduado em Ciência da computação pela <a href="https://palmas.uft.edu.br/grad/ccomp/">UFT</a> e estudante de mestrado em ciência da computação
        no <a href="http://escience.ime.usp.br/">IME-USP</a>. Gosto desta ideia de ser um <i>problem solver</i> e usar o que há de estado da arte na tecnologia. Sou apaixonado por Linux s2. Tenho expertise em ciência de dados, machine learning,
        visão computacional e computeiro nato que gosta dos mais mais baixos níveis do computador.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Ver mais</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Suayder Costa <Link to="/">suayder.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
