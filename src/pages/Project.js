import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import Main from '../layouts/Main';
import data from '../data/projects';

const Project = () => {
  const { id } = useParams();
  const thisProject = data.find((prod) => prod.id === id);

  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import(`../data/projects/${id}.md`)
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      }).catch(console.error);
  });

  return (
    <Main
      title="Project"
      description="Learn about the project."
    >
      <article className="post" id="project">
        <header>
          <div className="title">
            <h2>{thisProject.title}</h2>
            <p>{thisProject.subtitle}</p>
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
