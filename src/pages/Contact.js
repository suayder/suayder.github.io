import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';
import useLanguage from '../hooks/useLanguage';
import ptUi from '../data/ui';
import enUi from '../data/en/ui';

const Contact = () => {
  const { lang } = useLanguage();
  const t = lang === 'en' ? enUi : ptUi;

  return (
    <Main title={t.contact.title} description={t.contact.description}>
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2><Link to="/contact">{t.contact.heading}</Link></h2>
          </div>
        </header>
        <div className="others-contacts">
          <p>
            {t.contact.body}{' '}
            <a href="https://www.linkedin.com/in/suayder">Linkedin</a>.
          </p>
        </div>
        <div className="email-at">
          <p>{t.contact.emailPrompt}</p>
          <EmailLink />
        </div>
        <ContactIcons />
      </article>
    </Main>
  );
};

export default Contact;
