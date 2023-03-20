import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contato"
    description="Contate-me via email @ suayder1@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">Contato</Link></h2>
        </div>
      </header>
      <div className="others-contacts">
        <p>Fique a vontade para entrar em contato. Você pode mandar mensagem no meu <a href="https://www.linkedin.com/in/suayder">Linkedin</a>.</p>
      </div>
      <div className="email-at">
        <p>Se preferir você pode enviar email para: </p>
        <EmailLink />
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
