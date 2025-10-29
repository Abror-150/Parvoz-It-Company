import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'uz' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',
    'hero.title': 'We build digital experiences that fly',
    'hero.subtitle': 'Innovative technology solutions for modern businesses',
    'hero.cta1': 'Start Your Project',
    'hero.cta2': 'View Portfolio',
    'services.title': 'Our Services',
    'services.web': 'Web Development',
    'services.mobile': 'Mobile Apps',
    'services.uiux': 'UI/UX Design',
    'services.consulting': 'IT Consulting',
    'services.marketing': 'Digital Marketing',
    'about.title': 'About Parvoz IT',
    'contact.title': 'Get In Touch',
    'contact.name': 'Full Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'faq.title': 'Frequently Asked Questions',
    'order.title': 'Start Your Project',
    'order.projectType': 'Project Type',
    'order.description': 'Project Description',
    'order.submit': 'Submit Request',
    'footer.tagline': 'Building digital experiences that fly',
  },
  uz: {
    'nav.home': 'Bosh sahifa',
    'nav.services': 'Xizmatlar',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'Biz haqimizda',
    'nav.contact': 'Aloqa',
    'nav.faq': 'Savol-javob',
    'hero.title': 'Biz uchib ketadigan raqamli tajribalar yaratamiz',
    'hero.subtitle': 'Zamonaviy biznes uchun innovatsion texnologik yechimlar',
    'hero.cta1': 'Loyihani boshlash',
    'hero.cta2': 'Portfolio ko\'rish',
    'services.title': 'Bizning xizmatlar',
    'services.web': 'Veb dasturlash',
    'services.mobile': 'Mobil ilovalar',
    'services.uiux': 'UI/UX Dizayn',
    'services.consulting': 'IT Konsalting',
    'services.marketing': 'Raqamli marketing',
    'about.title': 'Parvoz IT haqida',
    'contact.title': 'Bog\'lanish',
    'contact.name': 'To\'liq ism',
    'contact.email': 'Elektron pochta',
    'contact.phone': 'Telefon',
    'contact.message': 'Xabar',
    'contact.send': 'Xabar yuborish',
    'faq.title': 'Ko\'p so\'raladigan savollar',
    'order.title': 'Loyihangizni boshlang',
    'order.projectType': 'Loyiha turi',
    'order.description': 'Loyiha tavsifi',
    'order.submit': 'So\'rov yuborish',
    'footer.tagline': 'Uchib ketadigan raqamli tajribalar yaratamiz',
  },
  ru: {
    'nav.home': 'Главная',
    'nav.services': 'Услуги',
    'nav.portfolio': 'Портфолио',
    'nav.about': 'О нас',
    'nav.contact': 'Контакты',
    'nav.faq': 'Вопросы',
    'hero.title': 'Мы создаем цифровые решения которые летают',
    'hero.subtitle': 'Инновационные технологические решения для современного бизнеса',
    'hero.cta1': 'Начать проект',
    'hero.cta2': 'Смотреть портфолио',
    'services.title': 'Наши услуги',
    'services.web': 'Веб-разработка',
    'services.mobile': 'Мобильные приложения',
    'services.uiux': 'UI/UX Дизайн',
    'services.consulting': 'IT Консалтинг',
    'services.marketing': 'Цифровой маркетинг',
    'about.title': 'О Parvoz IT',
    'contact.title': 'Свяжитесь с нами',
    'contact.name': 'Полное имя',
    'contact.email': 'Электронная почта',
    'contact.phone': 'Телефон',
    'contact.message': 'Сообщение',
    'contact.send': 'Отправить сообщение',
    'faq.title': 'Часто задаваемые вопросы',
    'order.title': 'Начните свой проект',
    'order.projectType': 'Тип проекта',
    'order.description': 'Описание проекта',
    'order.submit': 'Отправить запрос',
    'footer.tagline': 'Создаем цифровые решения которые летают',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
