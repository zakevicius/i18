import React from 'react'
import { withTranslation } from 'react-i18next';

function WithHOC({t, i18n}) {
    const handleClick = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div>
        <h1>I am with HOC</h1>
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

export default withTranslation(["index", "welcome"])(WithHOC);
