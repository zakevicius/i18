import { useTranslation } from 'react-i18next';

function Functional() {
  const {t, i18n} = useTranslation(['index', 'welcome'])

    const handleClick = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div>
        <h1>I am Functional</h1>
      <nav>
        <button onClick={() => handleClick('en')}>ENGLISH</button>
        <button onClick={() => handleClick('cn')}>CHINESE</button>
      </nav>
      <header>
        <h2>{t('title')}</h2>
        {t('description.part2')}
      </header>
      <p>{t('welcome:content')}</p>
    </div>
  );
}

export default Functional;
