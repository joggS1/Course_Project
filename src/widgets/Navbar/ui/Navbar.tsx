import { useTranslation } from 'react-i18next';

import { BugButton } from '@/app/providers/ErrorBoundary';
import { classNames } from '@/shared/lib';
import { AppLink } from '@/shared/ui/AppLink';

import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <nav className={classNames(styles.Navbar, {}, [className])}>
            <ul className={classNames(styles.Menu_items, {}, [])}>
                <li>
                    <AppLink to='/' type='primary'>
                        {t('страницы.главная')}
                    </AppLink>
                </li>
                <li>
                    <AppLink to='/about' type='primary'>
                        {t('страницы.онас')}
                    </AppLink>
                </li>
                <li>
                    <BugButton />
                </li>
            </ul>
        </nav>
    );
};
