import React from 'react';
import Table from './Table';
import ptData from '../../data/stats/personal';
import enData from '../../data/en/stats/personal';
import useLanguage from '../../hooks/useLanguage';

const PersonalStats = () => {
  const { lang } = useLanguage();
  const data = lang === 'en' ? enData : ptData;

  return (
    <>
      <h3>Some stats about me</h3>
      <Table data={data} />
    </>
  );
};

export default PersonalStats;
