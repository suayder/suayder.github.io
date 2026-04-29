import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const useLanguage = () => useContext(LanguageContext);

export default useLanguage;
