import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

const About = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/about.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      }).catch(console.error);
  });

  const count = markdown.split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return (
    <Main
      title="Sobre Suayder"
      description="Learn about Suayder"
    >
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2><Link to="/about">Sobre mim</Link></h2>
            <p>(Em aproximadamente {count} Palavras)</p>
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
