import React, { createContext, useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Create the language context
const LanguageContext = createContext();

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || 'en');

  // Update the language when it changes
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
  };

  // Initialize language from localStorage or browser settings
  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (savedLanguage) {
      changeLanguage(savedLanguage);
    }
  }, []);

  // Update context state when i18n language changes
  useEffect(() => {
    const handleLanguageChanged = () => {
      setLanguage(i18n.language);
    };

    i18n.on('languageChanged', handleLanguageChanged);

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [i18n]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create a custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};