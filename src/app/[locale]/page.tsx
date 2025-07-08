import React from 'react';
import { useTranslations } from 'next-intl';

function page() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}

export default page;
