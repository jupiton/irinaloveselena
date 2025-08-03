'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ro';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'header.subtitle': 'A poetic journey through the love of a mother and her daughter',
    
    // Hero Section
    'hero.title': 'Infinite Love',
    'hero.description': 'Between a mother and her daughter, there exists a bond so deep, so pure, that it transcends words. Irina and Elena share this unique magic that illuminates every day of their lives.',
    'irina.description': 'Strength and wisdom',
    'elena.description': 'Joy and light',
    'mother.daughter': 'Mother & Daughter',
    'eternal.love': 'An eternal love',
    
    // Photos Section
    'photos.title': 'Family Photos',
    'precious.moment': 'Precious Moment',
    'precious.moment.desc': 'A moment of shared joy between mother and daughter',
    'memories': 'Memories',
    'memories.desc': 'Unforgettable moments engraved in our hearts',
    'eternal.love.title': 'Eternal Love',
    'eternal.love.desc': 'A bond of love that transcends time',
    
    // Poems Section
    'poems.title': 'Poems from the Heart',
    'poem1.title': 'My Daughter, My Star',
    'poem1.stanza1': 'In your eyes, I see the future\nA smile that makes everything bloom\nElena, my little light\nYou are my joy, my first pride',
    'poem1.stanza2': 'Every day with you is a gift\nA precious moment, a new painting\nOf our love, so pure, so true\nThat grows even more each day',
    'poem2.title': 'Mama, My Angel',
    'poem2.stanza1': 'Mama, you are my guide, my rock\nIn your arms, I feel safe\nYour love protects me, consoles me\nYou are my strength, my eternal light',
    'poem2.stanza2': 'With you, I grow, I learn\nEvery life lesson is a treasure\nThank you for everything you give me\nFor this infinite love that surrounds me',
    'poem3.title': 'Our Eternal Bond',
    'poem3.stanza1': 'Between a mother and her daughter\nThere exists an invisible bond\nThat traverses time and space\nA love that never fades',
    'poem3.stanza2': 'Irina and Elena, united forever\nIn joy, in trials\nTheir love shines like a star\nIlluminating their path of life',
    
    // Gallery Section
    'gallery.title': 'Precious Moments',
    'maternal.love': 'Maternal Love',
    'maternal.love.desc': 'An unconditional love that grows each day',
    'shared.joy': 'Shared Joy',
    'shared.joy.desc': 'Moments of happiness and complicity',
    'future.together': 'Future Together',
    'future.together.desc': 'A path traced hand in hand',
    
    // Footer
    'footer.subtitle': 'A love that transcends time',
    'love': 'Love',
    'joy': 'Joy',
    'beauty': 'Beauty',
    'magic': 'Magic',
    
    // Login
    'login.private.access': 'Private access',
    'login.username': 'Username',
    'login.password': 'Password',
    'login.enter.username': 'Enter username',
    'login.enter.password': 'Enter password',
    'login.button': 'Login',
    'login.error': 'Incorrect username or password',
    'logout': 'Logout',
    
    // Language Selector
    'language.selector': 'Language',
    'english': 'English',
    'romanian': 'Romanian'
  },
  ro: {
    // Header
    'header.subtitle': 'O călătorie poetică prin iubirea unei mame și a fiicei sale',
    
    // Hero Section
    'hero.title': 'Iubirea Infinită',
    'hero.description': 'Între o mamă și fiica sa, există o legătură atât de profundă, atât de pură, încât transcende cuvintele. Irina și Elena împărtășesc această magie unică care luminează fiecare zi din viața lor.',
    'irina.description': 'Forța și înțelepciunea',
    'elena.description': 'Bucuria și lumina',
    'mother.daughter': 'Mamă & Fiică',
    'eternal.love': 'O iubire eternă',
    
    // Photos Section
    'photos.title': 'Fotografii de Familie',
    'precious.moment': 'Moment Prețios',
    'precious.moment.desc': 'Un moment de bucurie împărtășit între mamă și fiică',
    'memories': 'Amintiri',
    'memories.desc': 'Momente de neuitat gravate în inimile noastre',
    'eternal.love.title': 'Iubire Eternă',
    'eternal.love.desc': 'O legătură de iubire care traversează timpul',
    
    // Poems Section
    'poems.title': 'Poezii din Inimă',
    'poem1.title': 'Fiica Mea, Steaua Mea',
    'poem1.stanza1': 'În ochii tăi văd viitorul\nUn zâmbet care face totul să înflorească\nElena, luminița mea mică\nEști bucuria mea, mândria mea cea dintâi',
    'poem1.stanza2': 'Fiecare zi cu tine este un cadou\nUn moment prețios, o pictură nouă\nDin iubirea noastră, atât de pură, atât de adevărată\nCare crește încă în fiecare zi',
    'poem2.title': 'Mama, Îngerul Meu',
    'poem2.stanza1': 'Mama, tu ești ghidul meu, stânca mea\nÎn brațele tale mă simt în siguranță\nIubirea ta mă protejează, mă consolează\nTu ești forța mea, lumina mea eternă',
    'poem2.stanza2': 'Cu tine cresc, învăț\nFiecare lecție de viață este o comoară\nMulțumesc pentru tot ce îmi dai\nPentru această iubire infinită care mă înconjoară',
    'poem3.title': 'Legătura Noastră Eternă',
    'poem3.stanza1': 'Între o mamă și fiica sa\nExistă o legătură invizibilă\nCare traversează timpul și spațiul\nO iubire care nu se șterge niciodată',
    'poem3.stanza2': 'Irina și Elena, unite pentru totdeauna\nÎn bucurie, în încercări\nIubirea lor strălucește ca o stea\nIluminându-le calea de viață',
    
    // Gallery Section
    'gallery.title': 'Momente Prețioase',
    'maternal.love': 'Iubirea Maternă',
    'maternal.love.desc': 'O iubire necondiționată care crește în fiecare zi',
    'shared.joy': 'Bucuria Împărtășită',
    'shared.joy.desc': 'Momente de fericire și complicitate',
    'future.together': 'Viitorul Împreună',
    'future.together.desc': 'O cale trasă mână în mână',
    
    // Footer
    'footer.subtitle': 'O iubire care transcende timpul',
    'love': 'Iubire',
    'joy': 'Bucurie',
    'beauty': 'Frumusețe',
    'magic': 'Magie',
    
    // Login
    'login.private.access': 'Acces privat',
    'login.username': 'Username',
    'login.password': 'Parola',
    'login.enter.username': 'Introduceți username-ul',
    'login.enter.password': 'Introduceți parola',
    'login.button': 'Conectare',
    'login.error': 'Username sau parola incorectă',
    'logout': 'Deconectare',
    
    // Language Selector
    'language.selector': 'Limbă',
    'english': 'Engleză',
    'romanian': 'Română'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 