import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Cell from '../components/Projects/Cell';
import useLanguage from '../hooks/useLanguage';
import ptData from '../data/projects';
import enData from '../data/en/projects';
import ptUi from '../data/ui';
import enUi from '../data/en/ui';

const Projects = () => {
  const { lang } = useLanguage();
  const data = lang === 'en' ? enData : ptData;
  const t = lang === 'en' ? enUi : ptUi;

  return (
    <Main title={t.projects.title} description={t.projects.description}>
      <article className="post" id="projects">
        <header>
          <div className="title">
            <h2><Link to="/projects">{t.projects.heading}</Link></h2>
            <p>{t.projects.subtitle}</p>
          </div>
        </header>
        {data.map((project) => (
          <Cell
            data={project}
            key={project.title}
          />
        ))}
      </article>
    </Main>
  );
};

export default Projects;
