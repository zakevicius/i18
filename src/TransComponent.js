import React from 'react'
import { Trans } from 'react-i18next';

function TransComponent() {


  return (
    <div>
      <h1>I am with Trans Component</h1>
      <header>
        <h2>
          <Trans lang="cn" ns="index" i18nKey="title" />
        </h2>
        <Trans ns="index" i18nKey="description.part2" />
      </header>
      <p>
        <Trans ns="trans" i18nKey="content" />
      </p>
    </div>
  );
}

export default TransComponent;
