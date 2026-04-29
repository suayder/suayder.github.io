import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';
import useLanguage from '../hooks/useLanguage';
import ptUi from '../data/ui';
import enUi from '../data/en/ui';

const About = () => {
  const { lang } = useLanguage();
  const t = lang === 'en' ? enUi : ptUi;
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const mdImport = lang === 'en'
      ? import('../data/en/about.md')
      : import('../data/about.md');

    mdImport
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      }).catch(console.error);
  }, [lang]);

  const count = markdown.split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return (
    <Main title={t.about.title} description={t.about.description}>
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2><Link to="/about">{t.about.heading}</Link></h2>
            <p>{t.about.wordCount.replace('{count}', count)}</p>
          </div>
        </header>
        <Markdown>
          {markdown}
        </Markdown>
      </article>
    </Main>
  );
};

export default About;
