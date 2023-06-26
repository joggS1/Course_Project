import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import { Button } from '@/shared/ui/Button';

import styles from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = (props: ErrorPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const handleClick = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(styles.ErrorPage, {}, [className])}>
            <p>{t('Непредвиденная ошибка')}</p>
            <Button theme='outlined' onClick={handleClick}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
