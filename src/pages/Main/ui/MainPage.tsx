import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');
  return <div style={{ padding: 10 }}>{t('заголовок')}</div>;
};

export default MainPage;
