import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import { Button } from '@/shared/ui/Button';
import { LocaleSwitcher } from '@/widgets/LocaleSwitcher';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';

import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = (props: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { className } = props;
    const { t } = useTranslation();
    const toggleSidebar = () => {
        setCollapsed((prevState) => !prevState);
    };
    return (
        <div
            className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
            data-testid='sidebar'
        >
            <Button data-testid='sidebar-toggle' theme='outlined' onClick={toggleSidebar}>
                {t('открыть')}
            </Button>
            <div className={styles.swtichers}>
                <ThemeSwitcher />
                <LocaleSwitcher />
            </div>
        </div>
    );
};
