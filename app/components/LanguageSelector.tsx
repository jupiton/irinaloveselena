'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="absolute top-4 left-4">
      <div className="relative">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as 'en' | 'ro')}
          className="appearance-none bg-white/80 backdrop-blur-sm border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm font-medium text-gray-700 hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="en">{t('english')}</option>
          <option value="ro">{t('romanian')}</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="fill-current h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </div>
      </div>
    </div>
  );
} 