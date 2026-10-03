import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import useLanguage from '../hooks/useLanguage';
import ptUi from '../data/pt/ui';
import enUi from '../data/en/ui';
import ptPositions from '../data/pt/resume/positions';
import enPositions from '../data/en/resume/positions';

const RECENT_POSITIONS = 3;

const Index = () => {
  const { lang } = useLanguage();
  const t = lang === 'en' ? enUi : ptUi;
  const positions = lang === 'en' ? enPositions : ptPositions;
  const recent = positions.slice(0, RECENT_POSITIONS);

  return (
    <Main description={t.index.description}>
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2><Link to="/">{t.index.heading}</Link></h2>
            <p>{t.index.subtitle}</p>
          </div>
        </header>

        <p className="home-intro">{t.index.intro}</p>

        <section className="home-section">
          <h3>{t.index.focusTitle}</h3>
          <ul className="keywords">
            {t.index.focus.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <div className="home-columns">
          <section className="home-section">
            <h3>{t.index.careerTitle}</h3>
            <ul className="home-timeline">
              {recent.map((job) => (
                <li key={`${job.company}-${job.position}`}>
                  <strong>{job.position}</strong>
                  <span><a href={job.link}>{job.company}</a> · {job.daterange}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="home-section">
            <h3>{t.index.highlightsTitle}</h3>
            <ul className="home-highlights">
              {t.index.highlights.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        </div>

        <ul className="actions home-actions">
          <li><Link to="/resume" className="button">{t.index.resume}</Link></li>
          <li><Link to="/projects" className="button">{t.index.projects}</Link></li>
          <li><Link to="/contact" className="button">{t.index.contact}</Link></li>
        </ul>
      </article>
    </Main>
  );
};

export default Index;
