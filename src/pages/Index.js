import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import useLanguage from '../hooks/useLanguage';
import ptUi from '../data/ui';
import enUi from '../data/en/ui';

const Index = () => {
  const { lang } = useLanguage();
  const t = lang === 'en' ? enUi : ptUi;

  return (
    <Main description={t.index.description}>
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2><Link to="/">{t.index.heading}</Link></h2>
            <p>{t.index.subtitle}</p>
          </div>
        </header>
        <p>{t.index.intro}</p>
        <p>{t.index.body}</p>
        <p>
          {lang === 'en' ? (
            <>
              Feel free to read more{' '}
              <Link to="/about">{t.index.about}</Link>, or take a look at my{' '}
              <Link to="/resume">{t.index.resume}</Link>,{' '}
              <Link to="/projects">{t.index.projects}</Link>{' '}
              or <Link to="/contact">{t.index.contact}</Link>.
            </>
          ) : (
            <>
              Por favor, sinta-se a vontade para ler mais{' '}
              <Link to="/about">{t.index.about}</Link>,
              {' '}ou você pode dar uma olhada no meu{' '}
              <Link to="/resume">{t.index.resume}</Link>,{' '}
              <Link to="/projects">{t.index.projects}</Link>{' '}
              ou <Link to="/contact">{t.index.contact}</Link>.
            </>
          )}
        </p>
      </article>
    </Main>
  );
};

export default Index;
