import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';
import Publications from '../components/Resume/Publications';

import ptCourses from '../data/pt/resume/courses';
import ptDegrees from '../data/pt/resume/degrees';
import ptPositions from '../data/pt/resume/positions';
import enCourses from '../data/en/resume/courses';
import enDegrees from '../data/en/resume/degrees';
import enPositions from '../data/en/resume/positions';
import publicationsData from '../data/publications';
import { skills, categories } from '../data/skills';

import useLanguage from '../hooks/useLanguage';
import ptUi from '../data/pt/ui';
import enUi from '../data/en/ui';

const Resume = () => {
  const { lang } = useLanguage();
  const t = lang === 'en' ? enUi : ptUi;
  const courses = lang === 'en' ? enCourses : ptCourses;
  const degrees = lang === 'en' ? enDegrees : ptDegrees;
  const positions = lang === 'en' ? enPositions : ptPositions;
  const { sections, publications: pubLabel } = t.resume;

  return (
    <Main title={t.resume.title} description={t.resume.description}>
      <article className="post" id="resume">
        <header>
          <div className="title">
            <h2><Link to="/resume">{t.resume.heading}</Link></h2>
            <div className="link-container">
              {sections.map((sec) => (
                <h4 key={sec.id}>
                  <a href={`#${sec.id}`}>{sec.label}</a>
                </h4>))}
            </div>
          </div>
        </header>
        <Education data={degrees} />
        <Experience data={positions} />
        <Publications data={publicationsData} title={pubLabel} />
        <Skills skills={skills} categories={categories} />
        <Courses data={courses} />
        <References />
      </article>
    </Main>
  );
};

export default Resume;
