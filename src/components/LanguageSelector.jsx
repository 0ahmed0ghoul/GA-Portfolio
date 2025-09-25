import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; 
import { blackLangue, whiteLangue } from '../assets/icons';

const LanguageSelector = ({ darkMode }) => {
  const [showPopup, setShowPopup] = useState(false);
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const languages = [
    { code: 'en', name: 'ENG', fullName: 'English' },
    { code: 'de', name: 'DE', fullName: 'Deutsch' },
    { code: 'pt', name: 'PT', fullName: 'Português' }
  ];

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setCurrentLanguage(languageCode);
    setShowPopup(false);
    // Removed localStorage.setItem
  };

  useEffect(() => {
    // Always set to English initially, ignore browser language
    i18n.changeLanguage('en');
    setCurrentLanguage('en');
  }, [i18n]);

  return (
    <div className="relative">
      {/* Language Icon */}
      <div
        onClick={() => setShowPopup(!showPopup)}
        className="cursor-pointer transition-all duration-200"
      >
        <img 
          src={darkMode ? whiteLangue : blackLangue} 
          alt="language" 
          className="p-2 transition-all duration-500 hover:scale-110 hover:rotate-12" 
        />
      </div>

      {/* Language Popup */}
      {showPopup && (
        <div 
          className="absolute right-0 mt-2 w-32 bg-white  rounded-md shadow-lg z-50 border border-gray-700"
          onMouseLeave={() => setShowPopup(false)}
        >
          <div className="py-1">
            {languages.map((lang) => (
              <div
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`px-4 py-2 text-sm cursor-pointer flex items-center justify-between
                  ${currentLanguage === lang.code 
                    ? 'bg-blue-900 text-blue-200' 
                    : 'text-gray-200 hover:bg-gray-700'
                  }`}
              >
                <span>{lang.name}</span>
                <span className="text-xs text-gray-500">{lang.fullName}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;