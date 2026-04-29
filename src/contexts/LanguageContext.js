import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(
    () => localStorage.getItem('lang') || 'pt',
  );

  const setLang = (next) => {
    localStorage.setItem('lang', next);
    setLangState(next);
  };

  const value = useMemo(() => ({ lang, setLang }), [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { LanguageContext, LanguageProvider };
