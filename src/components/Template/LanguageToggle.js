import React from 'react';
import useLanguage from '../../hooks/useLanguage';

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-toggle" role="group" aria-label="Language selector">
      <button
        type="button"
        className={`lang-toggle__btn${lang === 'pt' ? ' lang-toggle__btn--active' : ''}`}
        onClick={() => setLang('pt')}
        aria-pressed={lang === 'pt'}
        aria-label="Português"
      >
        🇧🇷 PT
      </button>
      <span className="lang-toggle__sep">|</span>
      <button
        type="button"
        className={`lang-toggle__btn${lang === 'en' ? ' lang-toggle__btn--active' : ''}`}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        aria-label="English"
      >
        🇺🇸 EN
      </button>
    </div>
  );
};

export default LanguageToggle;
