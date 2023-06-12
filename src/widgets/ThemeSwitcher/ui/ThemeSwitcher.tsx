import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import ThemeIcon from '@/shared/assets/icons/theme_icon.svg';
import { classNames } from '@/shared/lib';
import { Button } from '@/shared/ui/Button';

import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const { className } = props;
    const { toggleTheme, theme } = useTheme();
    return (
        <div className={classNames(styles.ThemeSwitcher, {}, [className])}>
            <Button theme='outlined' onClick={toggleTheme}>
                <ThemeIcon fill={theme !== Theme.DARK ? '#000' : '#fff'} />
            </Button>
        </div>
    );
};
