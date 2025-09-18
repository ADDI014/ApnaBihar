// src/Components/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'bho', name: 'भोजपुरी' },
    { code: 'mai', name: 'मैथिली' },
    { code: 'mag', name: 'मगही' },
  ];

  return (
    <div className="flex space-x-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`px-3 py-1 text-sm rounded-md transition-colors ${i18n.language === lang.code ? 'bg-orange-500 text-white' : 'bg-stone-200 text-gray-700 hover:bg-stone-300'}`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;