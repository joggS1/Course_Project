import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import { Button } from '@/shared/ui/Button';

import styles from './LocaleSwitcher.module.scss';

interface LocaleSwitcherProps {
  className?: string;
}

export const LocaleSwitcher = (props: LocaleSwitcherProps) => {
  const { className } = props;
  const { t, i18n } = useTranslation();
  const onClick = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Button
      className={classNames(styles.LocaleSwitcher, {}, [className])}
      theme='outlined'
      onClick={() => onClick}
    >
      {t('язык')}
    </Button>
  );
};
