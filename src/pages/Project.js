import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';
import useLanguage from '../hooks/useLanguage';
import ptData from '../data/projects';
import enData from '../data/en/projects';

const Project = () => {
  const { id } = useParams();
  const { lang } = useLanguage();
  const data = lang === 'en' ? enData : ptData;
  const thisProject = data.find((prod) => prod.id === id);

  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const mdImport = lang === 'en'
      ? import(`../data/en/projects/${id}.md`)
      : import(`../data/projects/${id}.md`);

    mdImport
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      }).catch(console.error);
  }, [id, lang]);

  return (
    <Main
      title={thisProject ? thisProject.title : 'Project'}
      description={thisProject ? thisProject.desc : ''}
    >
      <article className="post" id="project">
        <header>
          <div className="title">
            <h2>{thisProject && thisProject.title}</h2>
            <p>{thisProject && thisProject.subtitle}</p>
          </div>
        </header>
        <Markdown>
          {markdown}
        </Markdown>
      </article>
    </Main>
  );
};

export default Project;
