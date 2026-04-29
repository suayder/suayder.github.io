import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';

import ptCourses from '../data/resume/courses';
import ptDegrees from '../data/resume/degrees';
import ptPositions from '../data/resume/positions';
import enCourses from '../data/en/resume/courses';
import enDegrees from '../data/en/resume/degrees';
import enPositions from '../data/en/resume/positions';
import { skills, categories } from '../data/resume/skills';

import useLanguage from '../hooks/useLanguage';
import ptUi from '../data/ui';
import enUi from '../data/en/ui';

const Resume = () => {
  const { lang } = useLanguage();
  const t = lang === 'en' ? enUi : ptUi;
  const courses = lang === 'en' ? enCourses : ptCourses;
  const degrees = lang === 'en' ? enDegrees : ptDegrees;
  const positions = lang === 'en' ? enPositions : ptPositions;
  const { sections } = t.resume;

  return (
    <Main title={t.resume.title} description={t.resume.description}>
      <article className="post" id="resume">
        <header>
          <div className="title">
            <h2><Link to="resume">{t.resume.heading}</Link></h2>
            <div className="link-container">
              {sections.map((sec) => (
                <h4 key={sec}>
                  <a href={`#${sec.toLowerCase()}`}>{sec}</a>
                </h4>))}
            </div>
          </div>
        </header>
        <Education data={degrees} />
        <Experience data={positions} />
        <Skills skills={skills} categories={categories} />
        <Courses data={courses} />
        <References />
      </article>
    </Main>
  );
};

export default Resume;
